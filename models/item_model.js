const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
},{timestamps:true});

module.exports = mongoose.model("Item",ItemSchema);