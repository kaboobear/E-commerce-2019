const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name)
        ? data.name
        : "";
    data.mail = !isEmpty(data.mail)
        ? data.mail
        : "";
    data.phone = !isEmpty(data.phone)
        ? data.phone
        : "";
    data.country = !isEmpty(data.country)
        ? data.country
        : "";
    data.city = !isEmpty(data.city)
        ? data.city
        : "";
    data.address = !isEmpty(data.address)
        ? data.address
        : "";

    if (Validator.isEmpty(data.name)) 
        errors.name = "Name field is required";
    else if (!Validator.isLength(data.name, {min: 3})) 
        errors.name = "Name must be at least 3 characters";
    
    if (Validator.isEmpty(data.mail)) 
        errors.mail = "Email field is required";
    else if (!Validator.isEmail(data.mail)) 
        errors.mail = "Email is invalid";
    
    if (Validator.isEmpty(data.phone)) 
        errors.phone = "Phone field is required";
    else if (!Validator.isLength(data.phone, {min: 6})) 
        errors.phone = "Phone must be at least 6 characters";
    
    if (Validator.isEmpty(data.country)) 
        errors.country = "Country field is required";
    else if (!Validator.isLength(data.country, {min: 3})) 
        errors.country = "Country must be at least 3 characters";
    
    if (Validator.isEmpty(data.city)) 
        errors.city = "City field is required";
    else if (!Validator.isLength(data.city, {min: 3})) 
        errors.city = "City must be at least 3 characters";
    
    if (Validator.isEmpty(data.address)) 
        errors.address = "Address field is required";
    else if (!Validator.isLength(data.address, {min: 3})) 
        errors.address = "Address must be at least 3 characters";
    return {errors, isValid: isEmpty(errors)};
};