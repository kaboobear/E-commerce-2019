const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    // count:{
    //     type:Number,
    //     required:true
    // },
    // isFreeShipping:{
    //     type:Boolean,
    //     required:true
    // },
    category:{
        type:String,
        required:true
    },
    imgName:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Item",ItemSchema);