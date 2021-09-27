import { API_ERRORS, ERROR_STATUS_CODES } from "../constants/errors";

export const getErrorByStatusCode = (status: number) => {
  switch (status) {
    case ERROR_STATUS_CODES.BAD_REQUEST: return API_ERRORS.WRONG_CREDENTIALS;
    case ERROR_STATUS_CODES.UNAUTHORIZED: return API_ERRORS.UNAUTHORIZED;
    default: return API_ERRORS.SOMETHING_WENT_WRONG
  }
};