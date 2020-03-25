const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth')

const validateRegister = require("../validation/register-validation");
const validateLogin = require("../validation/login-validation");
const secret = require("../config/keys").jwtKey;
const User = require('../models/user_model')


router.route('/').get((req, res) => {
        User.find().limit(50).then(auth => res.json(auth))
    })

router.get("/info",auth,(req,res)=>{
        User.findById(req.user.id)
            .select('-pass')
            .then(user=>res.json(user));
    })


router.route('/:id').get((req, res) => {
        User.findById(req.params.id).then(user => res.json(user)).catch(err => res.status(400).json('Error: ' + err))
    })


router.post("/register", (req, res) => {
    const {errors, isValid} = validateRegister(req.body);
    if (!isValid) return res.status(400).json(errors);

    User.findOne({mail: req.body.mail}).then(user => {
            if (user) return res.status(400).json({mail: "User already exists"});
            else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.pass, salt, (err, hash) => {
                        if (err) throw err;

                        const newUser = new User({login: req.body.login, mail: req.body.mail, pass: hash});
                        newUser.save()
                            .then(createdUser => {
                                const payload = {id: createdUser.id};

                                jwt.sign(payload, secret, {expiresIn: 31556926}, (err, token) => {
                                    if(err) res.json(err);
                                    res.json({createdUser,token});
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});


router.post("/login", (req, res) => {
    const {errors, isValid} = validateLogin(req.body);
    const mail = req.body.mail;
    const pass = req.body.pass;

    if (!isValid) return res.status(400).json(errors);

    User.findOne({mail}).then(user => {
            if (!user) {
                return res.status(404).json({mail: "Email not found"});
            }

            bcrypt
                .compare(pass, user.pass)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {id: user.id};

                        jwt.sign(payload, secret, {expiresIn: 31556926}, (err, token) => {
                            if(err) res.json(err);
                            res.json({user,token});
                        });
                    } else return res.status(400).json({pass: "Password incorrect"});
                });
        });
});





module.exports = router;