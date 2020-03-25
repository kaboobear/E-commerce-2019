const express = require('express');
const router = express.Router();
const Item = require('../models/item_model')
const auth = require('../middleware/auth')


router.get("/",(req,res)=>{
    Item
        .find()
        .limit(5)
        .then(items=>res.json(items))
})

router.get("/:id",(req,res)=>{
    Item
        .findById(req.params.id)
        .then(item=>res.json(item))
})

router.post("/",auth,(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    })

    newItem.save().then(item => res.json(item))
})

router.post("/:id",auth,(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>{
            item.name = req.body.name;

            item.save()
                .then(()=>res.json(item));
        })
})

router.delete("/:id",auth,(req,res)=>{
    Item.findById(req.params.id).then(item => item.remove().then(()=>{res.json(item)}))
})

module.exports = router;