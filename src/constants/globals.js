export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SET_FRIEND_DATA = 'SET_FRIEND_DATA';
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
