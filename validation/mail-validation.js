const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    const errors = {};

    data.mail = !isEmpty(data.mail)
        ? data.mail
        : "";


    if (Validator.isEmpty(data.mail)) 
        errors.mail = "Введите новую почту";
    else if (!Validator.isEmail(data.mail)) 
        errors.mail = "Введена некоректная почта";
    


    return {errors, isValid: isEmpty(errors)};
}