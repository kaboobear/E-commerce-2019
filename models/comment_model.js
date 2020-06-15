const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    product_id:{
        type:Schema.Types.ObjectId,
    },
    text:{
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model("Comment",CommentSchema);