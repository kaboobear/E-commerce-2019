const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLogin(data) {
    let errors = {};

    data.mail = !isEmpty(data.mail)
        ? data.mail
        : "";
    data.pass = !isEmpty(data.pass)
        ? data.pass
        : "";

    if (Validator.isEmpty(data.mail)) 
        errors.mail = "Email field is required";
    else if (!Validator.isEmail(data.mail)) 
        errors.mail = "Email is invalid";
    
    if (Validator.isEmpty(data.pass)) 
        errors.pass = "Password field is required";
    
    return {errors, isValid: isEmpty(errors)};
};