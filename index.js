const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = 'mongodb+srv://naveen05patidar:naveen05patidar@cluster0.gjmvxne.mongodb.net/?retryWrites=true&w=majority';
const port = 5000;
const bodyPerser = require('body-parser');
const cors = require('cors');
const Router = require ('./route/growmark.route.js');

mongoose.Promise = global.Promise;

mongoose.connect(config,{useNewUrlParser:true}).then(()=>{
    console.log(`database is connected on ${config}`);
}).catch((err)=>{
    console.log(err);
})

app.use(cors());
app.use(bodyPerser.urlencoded({extended:true}));
app.use(bodyPerser.json());

app.use('/api',Router);


app.listen(port,()=>{
    console.log(`server started on ${port}`);
})