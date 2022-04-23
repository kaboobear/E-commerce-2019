const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLogin(data) {
  let errors = {};

  data.mail = !isEmpty(data.mail) ? data.mail : '';
  data.pass = !isEmpty(data.pass) ? data.pass : '';

  if (Validator.isEmpty(data.mail)) errors.mail = 'Введите вашу почту';
  else if (!Validator.isEmail(data.mail))
    errors.mail = 'Введена некоректная почта';

  if (Validator.isEmpty(data.pass)) errors.pass = 'Введите ваш пароль';

  return { errors, isValid: isEmpty(errors) };
};
