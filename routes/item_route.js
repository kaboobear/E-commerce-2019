const express = require('express');
const router = express.Router();
const Item = require('../models/item_model')


router.get("/",(req,res)=>{
    Item
        .find()
        .limit(5)
        .then(items=>res.json(items))
})

router.post("/",(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    })

    newItem.save().then(item => res.json(item))
})

router.delete("/:id",(req,res)=>{
    Item.findById(req.params.id).then(item => item.remove().then(()=>{res.json(item)}))
})

module.exports = router;