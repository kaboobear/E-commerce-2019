const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const Item = require('../models/item_model');
const auth = require('../middleware/auth');

const validateItem = require("../validation/item-validation");

router.get("/", (req, res) => {
    Item
        .find()
        .then(items => res.json(items))
})

router.get("/:id", (req, res) => {
    Item
        .findById(req.params.id)
        .then(item => res.json(item))
})

router.post("/", (req, res) => {
    const {errors, isValid} = validateItem(req.body);
    if (!isValid) 
        return res.status(400).json(errors);
    
    const newItem = new Item({title: req.body.title, description: req.body.description, price: req.body.price, count: req.body.count, isFreeShipping: req.body.isFreeShipping,category: req.body.category})

    if (req.files !== null) {
        const file = req.files.file;
        const extName = path.extname(file.name);
        const fullName = newItem._id + extName;
        file.mv(`${__dirname}/../client/public/img/uploads/${fullName}`, err => {
            if (err) console.log(err);
            else {
                newItem.imgName = fullName;
                newItem.save().then(item => {
                    res.json(item)
                })
            }
        })
    } else {
        newItem.imgName = "default.png"
        newItem.save().then(item => {
            res.json(item)
        })
    } 



})

router.post("/:id", (req, res) => {
    const {errors, isValid} = validateItem(req.body);
    if (!isValid) 
        return res.status(400).json(errors);
    
    Item
        .findById(req.params.id)
        .then(item => {
            item.title = req.body.title;
            item.description = req.body.description;
            item.price = req.body.price;
            item.count = req.body.count;
            item.isFreeShipping = req.body.isFreeShipping;
            item.category = req.body.category;

            if (req.files !== null) {
                const file = req.files.file;
                const extName = path.extname(file.name);
                const fullName = item._id + extName;

                fs.unlink(`${__dirname}/../client/public/img/uploads/${item.imgName}`, (err) => {
                    if (err) return console.log(err)

                    file.mv(`${__dirname}/../client/public/img/uploads/${fullName}`, err => {
                        if (err) console.log(err);
                        
                        item.imgName = fullName;
                        item.save().then(() => {
                            res.json(item)
                        });
                    })
                })
            } else {
                item.save().then(() => res.json(item));
            }
        })
})

router.delete("/:id", (req, res) => {
    Item
        .findById(req.params.id)
        .then(item => item.remove().then(() => {
            if (item.imgName !== 'default.png') {
                fs.unlink(`${__dirname}/../client/public/img/uploads/${item.imgName}`, (err) => {
                    if (err) 
                        return console.log(err)
                    res.json(item)
                })
            } else {
                res.json(item)
            }
        }))
})

module.exports = router;