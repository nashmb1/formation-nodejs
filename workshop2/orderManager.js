var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const order = require(__dirname + '/orderModel.js');
const product = require(__dirname + '/productModel.js');

 var addOrder = function(productId, userId, callback) {
    product
        .findOneAndUpdate({ '_id': productId }, { $inc: { orders_counter: 1 }})
        .then(product => {
            return order.create({
                product: productId,
                user: userId,
                price: product.eur_price
            });
        })
        .then(result => {
            callback(result);
        })
        .catch((error) => {
            console.error(error);
        });
};

var getUserOrders = function(userId, callback) {
    order.find({'user': userId})
         .then(orders => {
             callback(orders)
         })
         .catch((error) => {
            console.error(error);
        });
};

module.exports = {
    addOrder,
    getUserOrders
};