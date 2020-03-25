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
    data.count = !isEmpty(data.count)
        ? data.count
        : "";

    if (Validator.isEmpty(data.title)) 
        errors.title = "Title field is required";
    else if (!Validator.isLength(data.title, {min: 4})) 
        errors.title = "Title must be at least 4 characters";
    
    if (Validator.isEmpty(data.description)) 
        errors.description = "Description field is required";
        else if (!Validator.isLength(data.description, {min: 10})) 
        errors.description = "Description must be at least 10 characters";
    
    if (Validator.isEmpty(data.price)) 
        errors.price = "Price field is required";

    if (Validator.isEmpty(data.count)) 
        errors.count = "Count field is required";
    
    return {errors, isValid: isEmpty(errors)};
};