// all used messages

// all language keys
const KEYS = {
  VERIFY_REQUIRED_INFORMATION: 'VERIFY_REQUIRED_INFORMATION',
  WRONG_PASSWORD: 'WRONG_PASSWORD',
  WRONG_SESSION: 'WRONG_SESSION',
  USER_NOT_EXIST: 'USER_NOT_EXIST',
  USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
  USER_ID_NOT_FOUND: 'USER_ID_NOT_FOUND',
  USER_EMAIL_NOT_FOUND: 'USER_EMAIL_NOT_FOUND',
  USER_ADD_ERROR: 'USER_ADD_ERROR',
  USER_UPDATE_ERROR: 'USER_UPDATE_ERROR',
  USER_DELETE_ERROR: 'USER_DELETE_ERROR',
  USER_LIST_ERROR: 'USER_LIST_ERROR',
  USER_LIST_DELETE_SUCCESS: 'USER_LIST_DELETE_SUCCESS',
  PHOTO_NOT_EXIST: 'PHOTO_NOT_EXIST',
  PHOTO_ALREADY_EXIST: 'PHOTO_ALREADY_EXIST',
  PHOTO_ADD_ERROR: 'PHOTO_ADD_ERROR',
  PHOTO_UPDATE_ERROR: 'PHOTO_UPDATE_ERROR',
  PHOTO_DELETE_ERROR: 'PHOTO_DELETE_ERROR',
  PHOTO_LIST_ERROR: 'PHOTO_LIST_ERROR',
}

// all messages
const DATA = [
  {
    key: KEYS.USER_ALREADY_EXIST,
    value: 'User already exist.',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.VERIFY_REQUIRED_INFORMATION,
    value: 'Please verify required information.',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_NOT_EXIST,
    value: 'User not exist.',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.WRONG_PASSWORD,
    value: 'Authentication failed. Wrong password.',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.WRONG_SESSION,
    value: 'An error was occured, please logout and authenticate again !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_ID_NOT_FOUND,
    value: 'Cannot find user with this id !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_EMAIL_NOT_FOUND,
    value: 'Cannot find user with this email !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_ADD_ERROR,
    value: 'An error occured when inserting user!',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_UPDATE_ERROR,
    value: 'An error occured when updating user!',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_DELETE_ERROR,
    value: 'An error occured when deleting user!',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_LIST_ERROR,
    value: 'An error occured when getting user list !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.USER_LIST_DELETE_SUCCESS,
    value: 'User list deleted with success !',
    language: 'en',
    status: 200
  },
  {
    key: KEYS.PHOTO_NOT_EXIST,
    value: 'Photo not exist.',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.PHOTO_ALREADY_EXIST,
    value: 'Photo already exist.',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.PHOTO_ADD_ERROR,
    value: 'An error occured when inserting photo !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.PHOTO_UPDATE_ERROR,
    value: 'An error occured when updating photo !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.PHOTO_DELETE_ERROR,
    value: 'An error occured when deleting photo !',
    language: 'en',
    status: 401
  },
  {
    key: KEYS.PHOTO_LIST_ERROR,
    value: 'An error occured when getting photo list !',
    language: 'en',
    status: 401
  },
]

const Messages = {
  KEYS,
  DATA,
}

export default Messages