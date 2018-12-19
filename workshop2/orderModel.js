var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    price: String,
    orders_counter: Number,
    date: {type: Date, default: Date.now}
});

var order = mongoose.model('order', schema);

module.exports = order;