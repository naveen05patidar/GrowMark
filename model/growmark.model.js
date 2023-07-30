const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let growmark = new Schema ({
    name:String,
    email:String,
    subject:String,
    msg:String
});

module.exports = mongoose.model('data',growmark)