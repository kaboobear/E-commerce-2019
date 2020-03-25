const secret = require('../config/keys').jwtKey;
const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(400).json({msg:"No token"});
    try{
        const decoded = jwt.verify(token,secret);
        req.user = decoded;
        next();
    }catch(e){
        res.status(400).json({msg:"Token isn't valid"});
    }
}

module.exports = auth;