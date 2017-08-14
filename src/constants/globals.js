export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const PASS_MIN_LENGTH = 10;

export const EMAIL_REGEX = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
export const PW_REGEX = {
  LOWER: /^(?=.*[a-z])/,
  UPPER: /^(?=.*[A-Z])/,
  DIGIT: /^(?=.*[0-9])/,
  SPECIAL: /^(?=.*[!@#$%^&*])/,
  LIMIT: /^(?=.{10,12})/
};
export const CELL_REGEX = /\d{3}-\d{3}-\d{4}/;
