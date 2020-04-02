const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const path = require("path");
const cors = require("cors");
const db = require("./config/keys").mongoURI;
const item_route = require("./routes/item_route");
const user_route = require("./routes/user_route");
const order_route = require("./routes/order_route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

mongoose
    .connect(db,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true })
    .then(()=>{console.log("MongoDb was connected")})
    .catch((err)=>{console.log(err);})

app.use('/item',item_route);
app.use('/user',user_route);
app.use('/order',order_route);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})

app.listen(port,()=>{console.log(`Server started on port ${port}`)}) 