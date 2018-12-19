var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    password: String
});

var user = mongoose.model('user', schema);

module.exports = user;