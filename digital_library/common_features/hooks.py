<<<<<<< HEAD
from flask import abort, request
import uuid, os
import base64
from datetime import datetime
from bson.objectid import ObjectId

from settings import CONFIG_DATA, BASE_DIR, LOGGER
from digital_library import app

def delete_image(path):
    """
    delete file
    :param path:
    :return:
    """
    if os.path.exists(path):
        full_path = os.path.join(BASE_DIR, path)
        os.remove(full_path)

def process_sequence_membership_id(requests):
    for request in  requests:
        accounts = app.data.driver.db['membership']
        memberships = accounts.find({}).sort([("membership_id",-1)]).limit(1)
        memebership_id = 1
        for item in memberships:
            memebership_id = item['membership_id']
        request['membership_id'] = memebership_id+1
    return requests


# hooks for stores
def before_create(resource, request):
    LOGGER.info("called for create image resource:{}".format(resource))
    if resource == 'membership':
        process_sequence_membership_id(request)

def before_update(resource, update, original):
    # getting all image fields of all tables from config file
    for image_field in CONFIG_DATA['IMAGE_FIELDS']:
        # checking image field of conf in update payload
        if image_field in update:
            # if image field of update payload is list
            if isinstance(update[image_field], list):

                # if given payload images empty list remove all previous images
                if not len(update[image_field]):
                    if image_field in original:
                        for index, payload_image in enumerate(original[image_field]):
                            delete_image(payload_image)
                        update[image_field] = []


            elif not update[image_field]:
                if image_field in original:
                    delete_image(original[image_field])
                    update[image_field] = ""

            elif image_field in update and image_field in original and update[image_field] != original[image_field]:
                # replace if image field string with path after save
                path = update[image_field]
                delete_image(original[image_field])
                update[image_field] = path

        # if image field in original
        if image_field in original:
            # whether image field of original list or not
            if isinstance(original[image_field], list):
                for index, original_image in enumerate(original[image_field]):
                    # if original image not in update payload delete from original data
                    if original_image not in update[image_field]:
                        delete_image(original_image)

def after_deleted_item(resource_name, item):
    for image_field in CONFIG_DATA['IMAGE_FIELDS']:
        if image_field in item:
            # if image field of update payload is list
            if isinstance(item[image_field], list):
                for index, payload_image in enumerate(item[image_field]):
                        delete_image(payload_image)

            elif isinstance(item[image_field], str):
                delete_image(item[image_field])

            elif isinstance(item[image_field], unicode):
                delete_image(item[image_field])

    return


=======
from flask import abort, request
import uuid, os
import base64
from datetime import datetime
from bson.objectid import ObjectId

from settings import CONFIG_DATA, BASE_DIR, LOGGER
from digital_library import app

def delete_image(path):
    """
    delete file
    :param path:
    :return:
    """
    if os.path.exists(path):
        full_path = os.path.join(BASE_DIR, path)
        os.remove(full_path)

def process_sequence_membership_id(requests):
    for request in  requests:
        accounts = app.data.driver.db['membership']
        memberships = accounts.find({}).sort([("membership_id",-1)]).limit(1)
        memebership_id = 1
        for item in memberships:
            memebership_id = item['membership_id']
        request['membership_id'] = memebership_id+1
    return requests


# hooks for stores
def before_create(resource, request):
    LOGGER.info("called for create image resource:{}".format(resource))
    if resource == 'membership':
        process_sequence_membership_id(request)

def before_update(resource, update, original):
    # getting all image fields of all tables from config file
    for image_field in CONFIG_DATA['IMAGE_FIELDS']:
        # checking image field of conf in update payload
        if image_field in update:
            # if image field of update payload is list
            if isinstance(update[image_field], list):

                # if given payload images empty list remove all previous images
                if not len(update[image_field]):
                    if image_field in original:
                        for index, payload_image in enumerate(original[image_field]):
                            delete_image(payload_image)
                        update[image_field] = []


            elif not update[image_field]:
                if image_field in original:
                    delete_image(original[image_field])
                    update[image_field] = ""

            elif image_field in update and image_field in original and update[image_field] != original[image_field]:
                # replace if image field string with path after save
                path = update[image_field]
                delete_image(original[image_field])
                update[image_field] = path

        # if image field in original
        if image_field in original:
            # whether image field of original list or not
            if isinstance(original[image_field], list):
                for index, original_image in enumerate(original[image_field]):
                    # if original image not in update payload delete from original data
                    if original_image not in update[image_field]:
                        delete_image(original_image)

def after_deleted_item(resource_name, item):
    for image_field in CONFIG_DATA['IMAGE_FIELDS']:
        if image_field in item:
            # if image field of update payload is list
            if isinstance(item[image_field], list):
                for index, payload_image in enumerate(item[image_field]):
                        delete_image(payload_image)

            elif isinstance(item[image_field], str):
                delete_image(item[image_field])

            elif isinstance(item[image_field], unicode):
                delete_image(item[image_field])

    return


>>>>>>> 6fa8e7667987e260e5f21606a0289cb2d133aabd
