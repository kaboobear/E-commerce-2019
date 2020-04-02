const express = require('express');
const router = express.Router();
const Order = require('../models/order_model');

const validateOrder = require("../validation/order-validation");

router.get("/", (req, res) => {
    Order.find().then(data=>res.json(data));
})

router.post("/", (req, res) => {
    const {errors, isValid} = validateOrder(req.body);
    if (!isValid) {
        console.log("x");
        return res.status(400).json(errors);
    }
    
    const newOrder = new Order({
        cart: req.body.cart,
        delivery: req.body.delivery,
        payment: req.body.payment,
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address
    })

    newOrder
        .save()
        .then(order => res.json(order))
        .catch(err => console.log(err));
})

router.delete("/:id",(req,res)=>{
    Order.findById(req.params.id).then(order => {
        order.remove().then(()=>{
            res.json(order);
        })
    })
})

module.exports = router;