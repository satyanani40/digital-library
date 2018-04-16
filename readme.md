# DIGITAL-LIBRARY API

## Installation:

    * step 1: install miniconda to use conda package manager:

        * download miniconda:
            wget https://repo.continuum.io/miniconda/Miniconda2-latest-Linux-x86_64.sh
        * install miniconda: bash Miniconda2-latest-Linux-x86_64.sh
        (by default it will install Python 2.7.13, digital library api currently supported on python 2.7.13)

    * step 2: setup virtualenv:

        * install virtualenv using conda:
                if we install miniconda it will install at "/home/<user_name>/miniconda2"
                activate root environment to access conda package
                 cd /home/<user_name>/miniconda2
                 source bin/activate
                 Note: now conda package available,
                       we can use to install another environment for digital library api rather than default root env.

        * creating dl_env and installing depences:

                conda create -f environment.yml

        * activate virtualenv:

                source activate dl_env

## Running:

    * In the configuration folder, we have to edit json files based on environment
    * Edit run.sh file in scripts folder:

            * edit path of virtualenv and project folder

            * give proper env_name=dev|tst|prd|stg

    * Running project:

             run ./run.sh file to start project.

## Api Urls information

    * Test Api URL: ""

    *  /api/1.0/auth/signup:**
        * Desc: creates or registers users
        * Method: POST,
        * Payload:


            ```
            [{
                 "first_name": "first name",
                 "last_name": "last name",
                 "email": "satya@example.com",
                 "mobile_number": "mobile number",
                 "password": "password",
                 "city": "city",
                 "age": 25,
                 "gender": "female",
                 "status": "active",
                 "user_level":["editor"]
            }]
            ```
            Note: user_level should be in ["user", "admin"]
                  gender should be male or female
                  status default active, but if admin creating user after logged in he can
                  assign active, inactive, deleted
                  email id and mobile number should be unique while registration

                  ** admin_creation_token is you pass this field name in payload admin will be created.
                  admin_creation_token value should be flask token(ask developer to get it)


    *  /api/1.0/auth/login:**
        * Desc: login user with email and password.
        * Method: POST,
        * Payload:


            ```
            {
                 "email": "",
                 "password": ""
            }
            ```
           Note: login endpoint will return token that token will be used for all other CRUD operations.

    *  /api/1.0/auth/me:**
        * Desc: Getting current user information.
        * Method: GET,

    *  /api/1.0/auth/logout:**
        * Desc: loggout current loggedin user.
        * Method: GET,

    *  api/1.0/auth/send-forgot-password-link:
        * Desc: sends forgot password link to user email id.
        * Method: POST,
        * Payload:


            ```
               {
                    "email": ""
                }

            ```

    *  /api/1.0/auth/change-password:**
        * Desc: setting new password to user account.
        * Method: POST,
        * Payload:
            ```
                {
                    "user_id": "",
                    "token": "",
                    "new_password": ""
                }
            ```
           Note: token will sent to user email id while doing forgot password operation.

    *  /api/1.0/auth/email-activation:**
        * Desc: activation of user registered email.
        * Method: POST,
        * Payload:
            ```
                {
                    "user_id": "",
                    "token": ""
                }
            ```
           Note: token will sent to user email id while doing registration operation.

    * /api/1.0/persons?where={"field_name":"value"}&?sort=field_name,-field_name:
        *Desc: finding person or filtering person. we can apply any mongo db get query to where statement.
        * Method: GET

    * /api/1.0/delete-documents
        * Desc: delete multiple documents from given collection.
        * Method: POST
        * payload: [{"resource_name": "<name of resources>", "ids":[1,2,3]}]
    * /api/1.0/persons/<id of document>:
        * Desc: updating specific document.
        * Method: PATCH
        * Payload: key value fields of persons collections.

    * Comman:
        1. for update or delete documents and fetching documents we need role based permissions
        2. should provide access_token in headers in following format:
            {"authorization":"<login token>"}



## Gunicorn: Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX.

   * Setup gunicorn with python application:

        gunicorn --bind host_name:port --timeout <count value> <APP_MODULE>:<Python_WSGI_APP> --env env_name=<environment name>

        EX: gunicorn --workers 3 --bind 0:8001 --timeout 1000 runserver:app --env env_name=tst
        Note: we can use --workers or --threads option to serve incoming request by multiple threads or process.

   * writing UpStart Script:

        * create file in /etc/init/name.conf
        * insert folowing lines into name.conf file:

            description "Gunicorn application server running fab project"

            start on runlevel [2345]
            stop on runlevel [!2345]

            respawn
            setuid user
            setgid www-data
            exec gunicorn --bind 0:8001 --workers 3 --timeout 1000 runserver:app --env env_name=tst

   * Starting and Stoping project:

        sudo service fab start
                or
        sudo service fab stop
                or
        sudo service fab restart

Note: if web server not serving static data we dnt need to configure Proxy server.
       otherwise recomanded Proxy is NGINx. If you choose another proxy server you need to make sure that it buffers slow clients
      when you use default Gunicorn workers. Without this buffering Gunicorn will be easily susceptible to
      denial-of-service attacks. You can use Hey to check if your proxy is behaving properly.




Installation of lxml:

sudo apt-get install libxml2-dev libxslt-dev python-dev
pip install lxml


### schema fields:
card details:
'card_details':{
'type': 'dict',
'schema':{
    'user_id':{
        'type': 'objectid',
        'data_relation': {
            'resource': 'persons',
            'embeddable': True,
            'field':'_id'
        },
    },

    'card_number':{
        'type': 'integer',
    },
    'card_type':{
        'type': 'string'
    },
    'expire_date':{
        'type':'string'
    },
    'cvv':{
        'type': 'integer'
    },
    'name_on_card':{
        'type': 'string'
    }
}
}
### Search books by id
/api/1.0/books?where={"book_title": {"$regex": ".*Surya.*", "$options": "i"}}