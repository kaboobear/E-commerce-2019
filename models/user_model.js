const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("User",UserSchema);