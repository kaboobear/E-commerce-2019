const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.oldPass = !isEmpty(data.oldPass) ? data.oldPass : '';
  data.newPass = !isEmpty(data.newPass) ? data.newPass : '';
  data.newPass2 = !isEmpty(data.newPass2) ? data.newPass2 : '';

  if (Validator.isEmpty(data.newPass)) errors.newPass = 'Введите ваш пароль';
  else if (
    !Validator.isLength(data.newPass, {
      min: 4,
      max: 30,
    })
  )
    errors.newPass = 'Слишком короткий пароль';

  if (Validator.isEmpty(data.newPass2))
    errors.newPass2 = 'Введите повторный пароль';
  else if (!Validator.equals(data.newPass, data.newPass2))
    errors.newPass2 = 'Пароли не совпадают';

  return { errors, isValid: isEmpty(errors) };
};
