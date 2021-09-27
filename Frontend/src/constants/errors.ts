export enum CLIENT_ERRORS {
  PASSWORD_MIN_LENGTH = 'Password must contain at least 6 characters!',
  INCORRECT_EMAIL = 'You should enter your email! Please try again.',
  PASSWORDS_NOT_MATCH = 'Passwords not match! Please try again.',
};

export enum API_ERRORS {
  WRONG_CREDENTIALS = 'Login or password is incorrect! Please try again.',
  UNAUTHORIZED = 'You have no access to private content, please authorize.',
  SOMETHING_WENT_WRONG = 'Something went wrong... Please refresh the page.',
};

export enum ERROR_STATUS_CODES {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}