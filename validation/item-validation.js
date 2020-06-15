const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title)
        ? data.title
        : "";
    data.description = !isEmpty(data.description)
        ? data.description
        : "";
    data.price = !isEmpty(data.price)
        ? data.price
        : "";
    // data.count = !isEmpty(data.count)
    //     ? data.count
    //     : "";

    if (Validator.isEmpty(data.title)) 
        errors.title = "Введите название";
    else if (!Validator.isLength(data.title, {min: 4})) 
        errors.title = "Минимальная длинна - 4 символа";
    
    if (Validator.isEmpty(data.description)) 
        errors.description = "Введите описание";
        else if (!Validator.isLength(data.description, {min: 10})) 
        errors.description = "Минимальная длинна - 10 символов";
    
    if (Validator.isEmpty(data.price)) 
        errors.price = "Введите цену";

    // if (Validator.isEmpty(data.count)) 
    //     errors.count = "Count field is required";
    
    return {errors, isValid: isEmpty(errors)};
};