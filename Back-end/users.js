const mongoose = require('mongoose');


const Users = mongoose.model('User',{
    email:{type: String,require: true, minLenght:5},
    password:{type: String,require: true, minLenght:4},
})
module.exports = Users;