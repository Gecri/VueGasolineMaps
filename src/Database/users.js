const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Alejandro:1111@databasegasweb.k6vtmxl.mongodb.net/primera?retryWrites=true&w=majority&appName=DatabaseGasWeb')

const Users = mongoose.model('User',{
    name:{type: String,require: true, minLenght:3},
    lastname:{type: String,require: true, minLenght:3}
})
module.exports = Users;