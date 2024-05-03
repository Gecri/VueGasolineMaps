const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://Alejandro:1111@databasegasweb.k6vtmxl.mongodb.net/primera?retryWrites=true&w=majority&appName=DatabaseGasWeb')

const Users = mongoose.model('User',{
    email:{type: String,require: true, minLenght:5},
    password:{type: String,require: true, minLenght:4},
})
module.exports = Users;