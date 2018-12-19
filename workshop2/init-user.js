
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection  open to db');
});

var user = require(__dirname + '/userModel.js');

[...Array(10).keys()].forEach(function(value, index){
    console.log('insert user: ' + index);
    user.create({
        name: 'shop_user' + index,
        password: 'password' + index,
    });
});