var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const user = require(__dirname + '/userModel.js');
var bcrypt = require('bcrypt');

module.exports = async function (username, password) {

    let userDoc = await user.findOne({name: username});

    return await bcrypt.compare(password, userDoc.password)
};
