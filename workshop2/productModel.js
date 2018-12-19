var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    description: String,
    usd_price: String,
    eur_price: String,
    orders_counter: Number,
    creation_date: {type: Date, default: Date.now}
});

var product = mongoose.model('product', schema);

module.exports = product;