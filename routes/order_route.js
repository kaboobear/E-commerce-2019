const express = require('express');
const router = express.Router();
const Order = require('../models/order_model');

const validateOrder = require("../validation/order-validation");

router.get("/", (req, res) => {
    Order.find().then(data=>res.json(data));
})

router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    Order.find({author:user_id}).sort({createdAt:'-1'}).then(data=>res.json(data));
})

router.post("/orderById/:id", (req, res) => {
    const order_id = req.params.id;
    Order.findById(order_id).then(data=>res.json(data));
})

router.post("/status", (req, res) => {
    const {id,status} = req.body;
    Order.findByIdAndUpdate(id,{status},{new:true}).then(data=>res.json(data));
})

router.post("/", (req, res) => {
    const {errors, isValid} = validateOrder(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    const newOrder = new Order({
        author: req.body.author,
        cart: req.body.cart,
        delivery: req.body.delivery,
        payment: req.body.payment,
        name: req.body.name,
        // mail: req.body.mail,
        phone: req.body.phone,
        // country: req.body.country,
        city: req.body.city,
        address: req.body.address
    })

    newOrder
        .save()
        .then(order => res.json(order))
        // .catch(err => console.log(err));
})

router.delete("/:id",(req,res)=>{
    Order.findById(req.params.id).then(order => {
        order.remove().then(()=>{
            res.json(order);
        })
    })
})

module.exports = router;