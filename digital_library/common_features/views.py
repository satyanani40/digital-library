from flask_mail import Mail, Message
from datetime import  datetime, timedelta
import jwt
from flask import jsonify, request, g, session

from digital_library import mail
from settings import TOKEN_SECRET, LOGGER


def send_dl_emails(**kwargs):
    LOGGER.info("email sending with payload:{0}".format(kwargs))
    msg = Message(kwargs['title'], sender=kwargs['sender'],recipients=kwargs['recipients'])
    with open(kwargs['template'], 'r') as _file:
        html_data = _file.read()
        if 'user_id' in kwargs:
            html_data = html_data.format(server_url=kwargs['server_url'],
                                         token=kwargs['token'],
                                         user_id=kwargs['user_id'],
                                         email=kwargs['email'],
                                         first_name=kwargs['first_name']
                                         )
        else:
            html_data = html_data.format(server_url=kwargs['server_url'],
                                         token=kwargs['token'],
                                         email=kwargs['email'],
                                         first_name=kwargs['first_name']
                                         )
        msg.html = html_data

    with mail.record_messages() as outbox:
        mail.send(msg)
        if not len(outbox):
            LOGGER.info("email sent failed with token:{0}".format(kwargs['token']))
            return False
        else:
            LOGGER.info("email sent with token:{0}".format(kwargs['token']))
            return True

def convert_object_dates_to_string(item, lst_keys):
    for k in lst_keys:
        try:
            item[k] = str(item[k])
        except KeyError:
            pass
    for v in item.values():
        if isinstance(v, dict):
            convert_object_dates_to_string(v, lst_keys)
    return item