from datetime import  datetime
import jwt, uuid
from bson.objectid import ObjectId
from flask import jsonify, request,make_response, g, session, abort
from werkzeug.security import generate_password_hash, check_password_hash

from digital_library import app
from digital_library import LOGGER
from digital_library.common_features.views import send_dl_emails
from digital_library.common_features.views import convert_object_dates_to_string
from settings import CONFIG_DATA, SERVER_URL
from digital_library.data_validations import Validations

# registration
@app.route('/api/1.0/auth/signup', methods=['POST'])
def signup():
    items = request.json
    if not isinstance(items, list):
        abort(400, 'payload should be list')
    for payload in items:

        LOGGER.info("signup payload request:{0}".format(payload))
        if 'password' not in payload:
            message = '{0} field not found in input payload'.format('password', payload)
            abort(400, message)
        if 'admin_creation_token' in payload:
            admin_creation_token = payload['admin_creation_token']
            del payload['admin_creation_token']
        else:
            admin_creation_token = None

        payload['password'] = {
                'password':str(generate_password_hash(payload['password'])),
                'password_raw':str(payload['password']),
                'last_password_updated_date':datetime.now()
        }
        payload['tokens'] = {
            'registration': '',
            'login': '',
            'forgot_password':''
        }
        payload['created_date'] = datetime.now()
        payload['email_confirmed'] = False

        if admin_creation_token and admin_creation_token == PASSWORD_CRYPTION_TOKEN:
            payload['email_confirmed']=True

        payload['pictures'] = {
            'thumbnail': '',
            'large': '',
            'medium': ''
        }
        payload['modified_date'] = datetime.now()
        payload['status'] = 'active'
        # check logged user can assign role or not otherwise default role will be 'user'
        can_assign = False
        if 'user_level' in payload and 'user_level' in session:
            if session['user_level'] in CONFIG_DATA['CREATE_USER_ROLES']:
                can_assign = True
        if not can_assign:
            payload['user_level'] = "user"

        if admin_creation_token and admin_creation_token == PASSWORD_CRYPTION_TOKEN:
            payload['user_level'] = "admin"

        validation = Validations('persons')
        violations = validation.validate_schema(payload, ['default', 'unique'])
        if violations:
            abort(400, str(violations))
        accounts = app.data.driver.db['persons']
        user = accounts.find_one({'email': payload['email']})
        if user:
            abort(400, "email:{0} already exists.".format(user['email']))
        user = accounts.find_one({'mobile_number': payload['mobile_number']})
        if user:
            abort(400, "mobile_number:{0} already exists.".format(user['mobile_number']))
        try:
            user_id = str(accounts.insert(payload))
            LOGGER.info("user successfully created:{0}".format(user_id))
            #####################################################################
            # if user creation failed, don't send email and remove created user
            #####################################################################
            if admin_creation_token and admin_creation_token == PASSWORD_CRYPTION_TOKEN:
                    if send_admin_emails(title=CONFIG_DATA['ADMIN_CREATION_TITLE'],
                                       recipients=[payload['email']],
                                       sender=CONFIG_DATA['FAB_SUPPORT_TEAM'],
                                       user_id=user_id,
                                       email=payload['email'],
                                       first_name=payload['first_name'],
                                       template=CONFIG_DATA['ADMIN_CREATION_EMAIL_TEMPLATE']):
                        payload['mail_sent'] = True
                        payload['main_sent_error'] = ''
                        payload['is_created'] = True
                        payload['_id'] = str(user_id)
                    else:
                        accounts.remove({'_id': ObjectId(user_id)})
                        payload['mail_sent'] = False
                        payload['is_created'] = False
                        payload['main_sent_error'] = "failed to send registration email, please try again..."
            else:
                ################################################
                # normal user signup not admin
                ################################################
                registration_token = str(uuid.uuid4())
                LOGGER.info("updating registration token:{0} for user id:{1}".format(registration_token, user_id))
                accounts.update({'_id': ObjectId(user_id)}, {'$set': {'tokens.registration': registration_token}})
                # registration email code.
                if send_dl_emails(title=CONFIG_DATA['REGISTRATION_TITLE'],
                           recipients = [payload['email']],
                           sender=CONFIG_DATA['FAB_SUPPORT_TEAM'],
                           user_id=user_id,
                            email=payload['email'],
                            first_name=payload['first_name'],
                           token=registration_token,
                           server_url=SERVER_URL,
                           template=CONFIG_DATA['REGISTRATION_EMAIL_TEMPLATE']):
                    payload['mail_sent'] = True
                    payload['main_sent_error'] = ''
                    payload['is_created'] = True
                    payload['_id'] = str(user_id)
                else:
                    accounts.remove({'_id': ObjectId(user_id)})
                    payload['mail_sent'] = False
                    payload['is_created'] = False
                    payload['main_sent_error'] = "failed to send registration email, please try again..."
            payload['error'] = ''
            print(payload,'********************')
        except Exception as e:
            LOGGER.error("got exception in signup:{0}".format(e))
            payload['is_created'] = False
            payload['error'] = str(e)
    response = jsonify(errors=[], data=items)
    response.status_code = 201
    return response

@app.route('/api/1.0/auth/login', methods=['POST'])
def login():

    accounts = app.data.driver.db['persons']
    user = accounts.find_one({'email': request.json['email']})
    if not user:
        message = 'Your email does not exist'
        abort(401, message)
    if not user['email_confirmed']:
        message='Email is not confirmed'
        abort(401, message)

    if user['status'] == 'inactive':
        message = user['first_name']+" you are Inactive, Please contact your Admin."
        abort(401, message)

    if 'user_id' in session:
        message = {}
        message['message']='User already logged in.'
        message['login_token'] = session['login_token']
        abort(401, message)

    if not user or not check_password_hash(user['password']['password'], request.json['password']):
        message='Wrong Email or Password'
        abort(401, message)

    token = str(uuid.uuid4())
    user['login_token'] = token
    del user['tokens']
    del user['password']
    accounts.update({'email': request.json['email']}, {"$set": {'tokens.login': token}})

    json_user = convert_object_dates_to_string(user, ['_id', 'created_date', 'modified_date',
                                                      'last_modified_by',''])

    session['user_id'] = json_user['_id']
    session['user_level'] = json_user['user_level']
    session['login_token'] = user['login_token']

    response = jsonify(data=json_user, errors = [])
    response.status_code = 200
    return response


