const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name)
        ? data.name
        : "";
    // data.mail = !isEmpty(data.mail)
    //     ? data.mail
    //     : "";
    data.phone = !isEmpty(data.phone)
        ? data.phone
        : "";
    // data.country = !isEmpty(data.country)
    //     ? data.country
    //     : "";
    data.city = !isEmpty(data.city)
        ? data.city
        : "";
    data.address = !isEmpty(data.address)
        ? data.address
        : "";

    if (Validator.isEmpty(data.name)) 
        errors.name = "Укажите ваше имя";
    else if (!Validator.isLength(data.name, {min: 3})) 
        errors.name = "Минимальная длинна - 3 символа";
    
    // if (Validator.isEmpty(data.mail)) 
    //     errors.mail = "Email field is required";
    // else if (!Validator.isEmail(data.mail)) 
    //     errors.mail = "Email is invalid";
    
    if (Validator.isEmpty(data.phone)) 
        errors.phone = "Укажите ваш телефон";
    else if (!Validator.isLength(data.phone, {min: 6})) 
        errors.phone = "Минимальная длинна - 6 символов";
    
    // if (Validator.isEmpty(data.country)) 
    //     errors.country = "Country field is required";
    // else if (!Validator.isLength(data.country, {min: 3})) 
    //     errors.country = "Country must be at least 3 characters";
    
    if (Validator.isEmpty(data.city)) 
        errors.city = "Укажите ваш город";
    else if (!Validator.isLength(data.city, {min: 3})) 
        errors.city = "Минимальная длинна - 3 символа";
    
    if (Validator.isEmpty(data.address)) 
        errors.address = "Укажите ваш адрес";
    else if (!Validator.isLength(data.address, {min: 3})) 
        errors.address = "Минимальная длинна - 3 символа";
    return {errors, isValid: isEmpty(errors)};
};