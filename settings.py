import logging
from logging.config import dictConfig
from datetime import datetime
import os, json, sys


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
# setting logger configuration
LOG_JSON_FILE_PATH = os.path.join(BASE_DIR, 'conf', 'logging.json')

if os.path.isfile(LOG_JSON_FILE_PATH):
    with open(LOG_JSON_FILE_PATH, 'r') as _logconf:
        print("new logger initiated...")
        dictConfig(json.load(_logconf))
else:
    print("logger file:{0} configuration file found.".format(LOG_JSON_FILE_PATH))

LOGGER = logging.getLogger(__name__)
LOGGER.info("base dir path:{0}".format(BASE_DIR))

CONFIG_DATA = None
# find environment name: local, dev, tst, stg, prd
def read_configuration_file(config_file_path):
    if os.path.isfile(config_file_path):
        with open(config_file_path, 'r') as logconf:
            return json.load(logconf)
    else:
        LOGGER.error("no configuration file found in the path of: "+ str(config_file_path) + "quitting..")
        sys.exit(0)

env = False



accepted_env = ['stg', 'prd', 'tst', 'dev', 'local']
if os.environ.get('env_name'):
    env = os.environ.get('env_name')
    if env in accepted_env:
        # read configuration file
        config_file_path = os.path.join(BASE_DIR, 'conf', str(env)+'_conf.json')
        LOGGER.info("configuration file path:{0}".format(config_file_path))
        CONFIG_DATA = read_configuration_file(config_file_path)
        LOGGER.info("configuration data is:{0}".format(CONFIG_DATA))
    else:
        LOGGER.error("environment variable must be in "+str(accepted_env)+ ". quitting...")
        exit()
    if env not in ['dev', 'local']:
        DEBUG=False
    else:
        DEBUG=True


else:
    LOGGER.warn("no environment name specified. taking default env local...")
    #exit()
    config_file_path = os.path.join(BASE_DIR, 'conf', 'local_conf.json')
    CONFIG_DATA = read_configuration_file(config_file_path)

if not CONFIG_DATA:
    LOGGER.error("no configuration data found, quitting")
    exit()

# if no environment variable is given, default it will take local.
ENV_NAME = env
LOGGER.info("application env name:{0}".format(ENV_NAME))
# email constants
REGISTRATION_EMAIL_TEMPLATE = CONFIG_DATA['REGISTRATION_EMAIL_TEMPLATE']
MAIL_SERVER=CONFIG_DATA['MAIL_SERVER']
MAIL_PORT=CONFIG_DATA['MAIL_PORT']
MAIL_USE_SSL=CONFIG_DATA['MAIL_USE_SSL']
MAIL_USERNAME = CONFIG_DATA['MAIL_USERNAME']
MAIL_PASSWORD = CONFIG_DATA['MAIL_PASSWORD']

MAX_CONTENT_LENGTH =1024 * 1024 * 1024 # 1024 MB
PAGINATION_LIMIT=50000



# logger configuration file
LOGGER_JSON_FILE = CONFIG_DATA['LOGGER_JSON_FILE']
PASSWORD_CRYPTION_TOKEN =CONFIG_DATA['PASSWORD_CRYPTION_TOKEN']
# server constants
HOST = CONFIG_DATA['HOST']
SERVER_URL = CONFIG_DATA['SERVER_URL']
PORT = CONFIG_DATA['PORT']
DEBUG = CONFIG_DATA['DEBUG']
URL_PREFIX = CONFIG_DATA['URL_PREFIX']
API_VERSION = CONFIG_DATA['API_VERSION']
PROTOCAL = CONFIG_DATA['PROTOCAL']


# LOCAL HOST MACHINE DETAILS
MONGO_HOST = CONFIG_DATA['MONGO_HOST']
MONGO_PORT = CONFIG_DATA['MONGO_PORT']
MONGO_USERNAME = CONFIG_DATA['MONGO_USERNAME']
MONGO_PASSWORD = CONFIG_DATA['MONGO_PASSWORD']
MONGO_DBNAME = CONFIG_DATA['MONGO_DBNAME']
MONGO_AUTHDBNAME = "admin"
#"""
#MONGO_URI = 'mongodb://t:t127.0.0.1:27017mongodb://@127.0.0.1:27027/admin'

TOKEN_SECRET = CONFIG_DATA['PASSWORD_CRYPTION_TOKEN']#os.environ.get('SECRET_KEY') or 'JWT Token Secret String'

# let's not forget the API entry point (not really needed anyway)

XML = False

# Enable reads (GET), inserts (POST) and DELETE for resources/collections
# (if you omit this line, the API will default to ['GET'] and provide
# read-only access to the endpoint).
RESOURCE_METHODS = ['GET', 'POST']
# Enable reads (GET), edits (PATCH) and deletes of individual items
# (defaults to read-only item access).
ITEM_METHODS = ['GET', 'PATCH', 'DELETE','PUT']
IF_MATCH = False
# We enable standard client cache directives for all resources exposed by the
# API. We can always override these global settings later.
#CACHE_CONTROL = 'max-age=0'
#CACHE_EXPIRES = 0
MONGO_QUERY_BLACKLIST = ['$where']
# Our API will expose two resources (MongoDB collections): 'people' and
# 'works'. In order to allow for proper data validation, we define behaviour
# and structure.


SCHEMAS = {
    'orders':{
        'shipping_address':{
            'type': 'dict',
            'schema':{
                'name': {
                    'type': 'string'
                },
                'address': {
                    'type': 'string'
                },
                'city': {
                    'type': 'string'
                },
                'state': {
                    'type': 'string'
                },
                'pin_code': {
                    'type': 'string'
                },
                'status': {
                    'type': 'string'
                },
                'phone_number': {
                    'type': 'string'
                }
            }

        },
        'total_amount': {
            'type': 'float'
        },
        'books': {
            'type': 'list',
            'schema': {
                'type': 'objectid',
                'data_relation': {
                    'resource': 'books',
                    'embeddable': True,
                    'field': '_id'
                }
            }
        },
        'user_id': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'persons',
                'embeddable': True
            }
        },
        'ordered_date':{
            'type': 'string'
        },
        'delivery_date': {
            'type': 'string'
        },
        'delivery_status': {
            'type': 'string'
        },
        'transaction_id': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'transactions',
                'embeddable': True
            }
        }
    },
    'transactions': {
        'amount': {'type': 'float'},
        'transaction_type': {'type': 'string'},
        'transaction_for': {'type': 'string'},
        'status': {'type': 'string'},
        'email': {'type': 'string'},
        'name': {'type': 'string'},
        'txnid': {'type': 'string'},
        'product_info': {'type': 'string'},
    },
    'wallet': {
        'user_id': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'persons',
                'embeddable': True
            }
        },
        'amount': {
            'type': 'string'
        }
    },
    'payments':{
        'total_amount': {
            'type': 'float'
        },
        'payment_date': {
            'type': 'string'
        },
        'payment_status': {
            'type': 'string'
        },
        'payment_for': {
            'type': 'string'
        },
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
    },
    'cart':{
        'book_type': {
            'type': 'string'
        },
        'book': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'books',
                'embeddable': True,
                'field': '_id'
            }
        },
        'user_id': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'persons',
                'embeddable': True,
                'field': '_id'
            },
        }

    },

    'membership':{

        'user_id': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'persons',
                'embeddable': True,
                'field': '_id'
            },
        },
        'plan_expiry': {
            'type': 'string'
        },

        'membership_type': {
            'type': 'string'
        },
        'status': {
            'type': 'boolean'
        },
        'account_balance': {
            'type': 'float'
        },
        'plan_balance': {
            'type': 'float'
        },
        'issue_pending':{
            'type': 'integer'
        },
        'return_pending': {
            'type': 'integer'
        },
        'return_ready': {
            'type': 'integer'
        },

    },
    'books': {
        'book_title': {
            'type': 'string'
        },
        'sub_title': {
            'type': 'string'
        },
        'book_summary': {
            'type': 'string'
        },

        'book_keywords': {
            'type': 'string'
         },
        'no_of_pages': {
            'type': 'integer'
        },
        'book_authors': {
            'type': 'list'
        },
        'book_author_desc': {
            'type': 'string'
        },
        'availability': {
            'type': 'boolean'
        },
        'ecopy_price': {
            'type': 'float'
        },
        'hcopy_price': {
            'type': 'float'
        },

        'language': {
            'type': 'string'
        },
        'publisher': {
            'type': 'string'
        },
        'ISBN_10': {
            'type': 'string'
        },
        'ISBN_13': {
            'type': 'string'
        },
        'ebook': {
            'type': 'string'
        },
        'published_date': {
            'type': 'string'
        },
        'image_small_thumbnail': {
            'type': 'string'
        },
        'image_thumbnail': {
            'type': 'string'
        },
        'book_categories': {
            'type': 'list',
            'schema': {
                'type': 'objectid',
                'data_relation': {
                    'resource': 'categories',
                    'embeddable': True,
                    'field': '_id'
                }
            }
        },

        'created_date': {
            'type': 'datetime',
            'default': datetime.now(),
        },
        'modified_date': {
            'type': 'datetime',
            'empty': True
        }
    },

    'authors':{
        'author_name': {
            'type': 'string',
            'required': True,
        },
        'created_date': {
            'type': 'datetime',
            'default': datetime.now(),
        },
        'modified_date': {
            'type': 'datetime',
            'empty': True
        }
    },
    'categories': {
        'category_name': {
            'type': 'string',
            'required': True,
        },
        'created_date': {
            'type': 'datetime',
            'default': datetime.now(),
        },
        'modified_date': {
            'type': 'datetime',
            'empty': True
        }
    },
    'persons': {
        'shipping_address':{
            'type': 'list',
            'schema':{
                'type':'dict',
                'schema':{
                    'name': {
                        'type': 'string'
                    },
                    'address': {
                        'type': 'string'
                    },
                    'city': {
                        'type': 'string'
                    },
                    'state': {
                        'type': 'string'
                    },
                    'pin_code': {
                        'type': 'string'
                    },
                    'status': {
                        'type': 'string'
                    },
                    'phone_number': {
                        'type': 'string'
                    },
                    'default': {
                        'type': 'boolean',
                        'default': False
                    }
                }
            }

        },
        'first_name': {
            'type': 'string',
            'required': True,
        },
        'last_name': {
            'type': 'string',
            'required': True
        },
        'email': {
            'type': 'string',
            'required': True,
            'unique': True
        },
        'email_confirmed': {
            'type': 'boolean',
            'default': False
        },
        'mobile_number': {
            'type': 'string',
            'required': True,
            'unique': True
        },
        'password': {
            'type': 'dict',
            'required': True,
            'schema': {
                'password': {'type': 'string'},
                'password_raw': {'type': 'string'},
                'last_password_updated_date': {
                    'type': 'datetime',
                    'empty': True
                }
            },
        },
        'pictures': {
            'type': 'dict',
            'schema': {
                'large': {'type': 'string', 'empty': True},
                'medium': {'type': 'string', 'empty': True},
                'thumbnail': {'type': 'string', 'empty': True}
            },
        },
        'city': {
            'type': 'string',
            'required': True
        },
        'age': {
            'type': 'integer'
        },
        'gender': {
            'type': 'string',
            'allowed': ["male", "female"],
            'required': True
        },
        'user_level': {
            'type': 'string',
            'allowed': CONFIG_DATA['APPLICATION_ROLES'],
            'required': True
        },
        'created_date': {
            'type': 'datetime',
            'default': datetime.now(),
            'required': True
        },
        'modified_date': {
            'type': 'datetime',
            'empty': True
        },
        'last_modified_by': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'persons',
                'embeddable': True
            }
        },
        'status': {
            'type': 'string',
            'default': 'inactive',
            'allowed': ['inactive', 'active', 'deleted']
        },
        'tokens': {
            'type': 'dict',
            'schema': {
                'registration': {'type': 'string', 'empty': True},
                'login': {'type': 'list', 'empty': True},
                'forgot_password': {'type': 'string', 'empty': True}
            },
        }
    }

}

PERSONS_SCHEMA = SCHEMAS['persons']
AUTHORS_SCHEMA = SCHEMAS['authors']
CATEGORIES_SCHEMA = SCHEMAS['categories']
BOOKS_SCHEMA = SCHEMAS['books']
MEMBERSHIP_SCHEMA = SCHEMAS['membership']
PAYMENTS_SCHEMA = SCHEMAS['payments']
ORDERS_SCHEMA = SCHEMAS['orders']
CART_SCHEMA = SCHEMAS['cart']
TRANSACTIONS_SCHEMA = SCHEMAS['transactions']
WALLET_SCHEMA = SCHEMAS['wallet']


PERSONS = {
    'item_title': 'persons',
    'schema': PERSONS_SCHEMA,
    'url': 'persons'
}
AUTHORS = {
    'item_title': 'authors',
    'schema': AUTHORS_SCHEMA,
    'url': 'authors'
}
CATEGORIES = {
    'item_title': 'categories',
    'schema': CATEGORIES_SCHEMA,
    'url': 'categories'
}

BOOKS = {
    'item_title': 'books',
    'schema': BOOKS_SCHEMA,
    'url': 'books'

}

PAYMENTS = {
    'item_title': 'payments',
    'schema': PAYMENTS_SCHEMA,
    'url': 'payments'

}

ORDERS = {
    'item_title': 'orders',
    'schema': ORDERS_SCHEMA,
    'url': 'orders'

}

MEMBERSHIP = {
    'item_title': 'membership',
    'schema': MEMBERSHIP_SCHEMA,
    'url': 'membership'

}

CART = {
    'item_title': 'cart',
    'schema': CART_SCHEMA,
    'url': 'cart'

}

TRANSACTIONS = {
    'item_title': 'transactions',
    'schema': TRANSACTIONS_SCHEMA,
    'url': 'transactions'

}

WALLET = {
    'item_title': 'wallet',
    'schema': WALLET_SCHEMA,
    'url': 'wallet'

}

# The DOMAIN dict explains which resources will be available and how they will
# be accessible to the API consumer.
DOMAIN = {
    'persons': PERSONS,
    'authors': AUTHORS,
    'categories': CATEGORIES,
    'books': BOOKS,
    'membership': MEMBERSHIP,
    'orders': ORDERS,
    'payments': PAYMENTS,
    'cart': CART,
    'transactions': TRANSACTIONS,
    'wallet': WALLET
}

COLLECTION_NAMES = DOMAIN.keys()