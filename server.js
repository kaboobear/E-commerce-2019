const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const db = require("./config/keys").mongoURI;
const item_route = require("./routes/item_route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>{console.log("MongoDb was connected")})
    .catch((err)=>{console.log(err);})

app.use('/item',item_route);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port,()=>{console.log(`Server started on port ${port}`)}) 