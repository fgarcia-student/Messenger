import {EMAIL_REGEX, PW_REGEX, CELL_REGEX} from './globals';

const helperValidateEmail = (email) => {
  //regular expression to test if email is correct format
  return EMAIL_REGEX.test(email);
}

const helperValidatePW = (pw) => {
  return ({
    lower: PW_REGEX.LOWER.test(pw),
    upper: PW_REGEX.UPPER.test(pw),
    digit: PW_REGEX.DIGIT.test(pw),
    special: PW_REGEX.SPECIAL.test(pw),
    limit: PW_REGEX.LIMIT.test(pw)
  });
}

const helperValidateCell = (cell) => {
  return CELL_REGEX.test(cell);
}

export {
  helperValidateEmail,
  helperValidatePW,
  helperValidateCell
}
