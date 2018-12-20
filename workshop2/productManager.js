var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const product = require(__dirname + '/productModel.js');

var getUserProducts = function() {

}

module.exports.findUserProducts = product.find();