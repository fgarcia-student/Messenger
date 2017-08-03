const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const PASS_MIN_LENGTH = 10;

const EMAIL_REGEX = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const PW_REGEX = {
  LOWER: /^(?=.*[a-z])/,
  UPPER: /^(?=.*[A-Z])/,
  DIGIT: /^(?=.*[0-9])/,
  SPECIAL: /^(?=.*[!@#$%^&*])/,
  LIMIT: /^(?=.{10,12})/
};
const CELL_REGEX = /\d{3}-\d{3}-\d{4}/;

export {
  LOGIN,
  REGISTER,
  PASS_MIN_LENGTH,
  EMAIL_REGEX,
  PW_REGEX,
  CELL_REGEX
}
