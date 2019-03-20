const SLUG_NOT_ALLOWED = /[$*_+~.()'"!\-:@']/g
const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ALIAS = /^[\.a-z\d\-_]+$/

/* 
  8 characters min-length and 3 of the following 4 rules:
  1. uppercase letters
  2. lowercase letters
  3. numbers
  4. special characters
*/
const PASSWORD = /^(?=.{8,})((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])).*$/

export default {
  SLUG_NOT_ALLOWED,
  EMAIL,
  ALIAS,
  PASSWORD,
}
