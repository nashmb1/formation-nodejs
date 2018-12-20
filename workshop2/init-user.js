
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/test');


var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection  open to db');
});

var user = require(__dirname + '/userModel.js');

[...Array(10).keys()].forEach(async function(value, index){
    console.log('insert user: ' + index);

    try {
        let password = await bcrypt.hash('password' + index, 10);
        user.create({
            name: 'shop_user' + index,
            password: password,
    });
    } catch(e) {
        console.error(e);
        
    }
});