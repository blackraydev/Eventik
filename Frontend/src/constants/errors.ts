export enum CLIENT_ERRORS {
  PASSWORD_MIN_LENGTH = 'Password must contain at least 6 characters!',
  INCORRECT_EMAIL = 'You should enter your email! Please try again.',
  PASSWORDS_NOT_MATCH = 'Passwords not match! Please try again.',
};

export enum API_ERRORS {
  WRONG_CREDENTIALS = 'Login or password is incorrect! Please try again.',
  EMAIL_EXIST = 'User with this email already exist! Please try another email.',
  UNAUTHORIZED = 'You have no access to private content, please authorize.',
  SOMETHING_WENT_WRONG = 'Something went wrong... Please refresh the page.',
};

export enum ERROR_STATUS_CODES {
  BAD_REQUEST_LOGIN = "400/LOGIN",
  BAD_REQUEST_REGISTRATION = "400/REGISTRATION",
  UNAUTHORIZED = "401",
  NOT_FOUND = "404",
}