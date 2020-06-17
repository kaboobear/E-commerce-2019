const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth');

const secret = require("../config/keys").jwtKey;
const User = require('../models/user_model');
const Item = require('../models/item_model');
const Order = require('../models/order_model');

const validateRegister = require("../validation/register-validation");
const validateLogin = require("../validation/login-validation");
const validatePass = require("../validation/pass-validation");
const validateMail = require("../validation/mail-validation");
const validateOrder = require("../validation/order-validation");

router
    .route('/')
    .get((req, res) => {
        User
            .find()
            .limit(50)
            .then(auth => res.json(auth))
    })

router.get("/info", auth, (req, res) => {
    User
        .findById(req.user.id)
        .select('-pass')
        .then(user => res.json(user));
})

router.get("/counts", auth, async (req, res) => {
    const usersCount = await User.countDocuments();
    const productsCount = await Item.countDocuments();
    const ordersCount = await Order.countDocuments();
    const orders = await Order.find();
    const totalCount = orders.reduce((prev,current) => prev + parseInt(current.cart.count),0)
    const summary = orders.reduce((prev,current) => prev + current.cart.total,0)

    res.json({usersCount,productsCount,ordersCount,totalCount,summary})
})

router
    .route('/:id')
    .get((req, res) => {
        User
            .findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err))
    })

router.post("/register", (req, res) => {
    const {errors, isValid} = validateRegister(req.body);
    if (!isValid) 
        return res.status(400).json(errors);
    
    User
        .findOne({mail: req.body.mail})
        .then(user => {
            if (user) 
                return res.status(400).json({mail: "Данная почта уже используется"});
            else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.pass, salt, (err, hash) => {
                        if (err) 
                            throw err;
                        
                        // const newUser = new User({login: req.body.login, mail: req.body.mail, pass:
                        // hash});
                        const newUser = new User({mail: req.body.mail, pass: hash});
                        newUser
                            .save()
                            .then(createdUser => {
                                const payload = {
                                    id: createdUser.id
                                };

                                jwt.sign(payload, secret, {
                                    expiresIn: 31556926
                                }, (err, token) => {
                                    if (err) 
                                        res.json(err);
                                    res.json({user:createdUser, token});
                                });
                            })
                            // .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.post("/login", (req, res) => {
    const {errors, isValid} = validateLogin(req.body);
    const mail = req.body.mail;
    const pass = req.body.pass;

    if (!isValid) 
        return res.status(400).json(errors);
    
    User
        .findOne({mail})
        .then(user => {
            if (!user) {
                return res
                    .status(404)
                    .json({mail: "Почта не найдена"});
            }

            bcrypt
                .compare(pass, user.pass)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id
                        };

                        jwt.sign(payload, secret, {
                            expiresIn: 31556926
                        }, (err, token) => {
                            if (err) 
                                res.json(err);
                            res.json({user, token});
                        });
                    } else 
                        return res
                            .status(400)
                            .json({pass: "Введен неправильный пароль"});
                    }
                );
        });
});

router.post("/editMail", (req, res) => {
    const {errors, isValid} = validateMail(req.body);
    const data = req.body;
    const mail = req.body.mail;

    if (!isValid) 
        return res.status(400).json(errors);
    
    if (mail === data.user.mail) 
        return res.status(200);
    
    User
        .findOne({mail})
        .then(user => {
            if (user) {
                return res
                    .status(400)
                    .json({mail: "Почта уже используется"});
            }

            User.findByIdAndUpdate(data.user._id, {
                mail
            }, {new: true}).then(result => {
                return res
                    .status(200)
                    .json(result);
            });
        });
});

router.post("/editPass", (req, res) => {
    const {errors, isValid} = validatePass(req.body);
    const oldPass = req.body.oldPass;
    const newPass = req.body.newPass;
    const user = req.body.user;

    if (!isValid) 
        return res.status(400).json(errors);
    
    User
        .findById(user._id)
        .then(user => {
            bcrypt
                .compare(oldPass, user.pass)
                .then(isMatch => {
                    if (isMatch) {
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newPass, salt, (err, hash) => {
                                if (err) 
                                    throw err;
                                user.pass = hash;
                                user
                                    .save()
                                    .then(result => {
                                        res
                                            .status(200)
                                            .json(result);
                                    })
                            })
                        })
                    } else 
                        return res
                            .status(400)
                            .json({oldPass: "Введен неправильный пароль"});
                    }
                );
        });
});

router.post("/setDelivery", (req, res) => {
    const {errors, isValid} = validateOrder(req.body);
    const data = req.body;

    if (!isValid) 
        return res.status(400).json(errors);
    
    const delivery = {
        name: data.name,
        phone: data.phone,
        city: data.city,
        address: data.address
    }

    User
        .findByIdAndUpdate(data.user._id, {delivery},{new:true})
        .then(user => {
            return res
                .status(200)
                .json(user);
        });
});

module.exports = router;