export const SLUG_NOT_ALLOWED = /[$*_+~()'"!\-:@']/g
export const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*
  ALIAS regex
  allowed:
    - alphanumerics
    - underscore
    - space
    - cannot be two underscores in a row
    - cannot have two spaces in a row
    - cannot start or end in an underscore or space
*/
export const ALIAS = /^[A-Za-z0-9. ]+(?:[_][A-Za-z0-9.]+)*$/

/*
  PASSWORD regex
  8 characters min-length and 3 of the following 4 rules:
  1. uppercase letters
  2. lowercase letters
  3. numbers
  4. special characters
*/
export const PASSWORD = /^(?=.{8,})((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])).*$/

export default {
  SLUG_NOT_ALLOWED,
  EMAIL,
  ALIAS,
  PASSWORD,
}
