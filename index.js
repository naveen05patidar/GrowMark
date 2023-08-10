const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config.js');
const Router = require('./route/user.route.js');
const productRouter = require('./route/product.route.js');

const Product = require('./model/product.model.js');


mongoose.Promise = global.Promise;

mongoose.connect(config.DB,({useNewUrlParser:true})).then(()=>{
    console.log(`mongodb is connected on ${config.DB}`);
}).catch((err)=>{
    console.log(err);
})


app.get('/np', async (req,res)=>{
    await Product.find().then((product)=>{
        res.status(200).json({success:true,product:product})
    }).catch((err)=>{
        res.status(500).json({success:false,message:"np not work"})
    });
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/user',Router)
app.use('/product',productRouter)


app.listen(port,()=>{
    console.log(`Server Started on ${port}`);
})