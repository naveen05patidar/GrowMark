const express = require('express');
const Router = express.Router();
const growmark = require('../model/growmark.model');
const SendMail =require('../middleware/nodemailer.js')

Router.route('/contactus').post(SendMail,async (req,res)=>{
    console.log(req.body);
    let user = await new growmark(req.body);
    console.log(user);
    user.save().then((result)=>{
        res.status(200).send('data saved successfully')
    }).catch((err)=>{
        res.status(500).send("error"+err);
    })
})

module.exports = Router;
