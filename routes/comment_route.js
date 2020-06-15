const express = require('express');
const router = express.Router();
const Item = require('../models/item_model');
const Comment = require('../models/comment_model');

router.get("/:id", (req, res) => {
    Comment
        .find({product_id:req.params.id})
        .sort({'createdAt':-1})
        .populate('author')
        .then(comments => res.json(comments))
})

router.post("/",(req,res)=>{
    const {product_id,author,text} = req.body;
    const newComment = new Comment({product_id,author,text});
    newComment.save().then(createdComment => {
        Comment.findById(createdComment._id).populate('author').then(result=>{
            res.json(result);
        })
    });
})


module.exports = router;