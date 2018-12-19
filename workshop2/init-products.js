
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection  open to db');
});

var product = require(__dirname + '/productModel.js');

[...Array(10).keys()].forEach(function(value, index){
    console.log('insert product: ' + index);
    product.create({
        name: 'product' + index,
        description: 'Produit magique' + index,
        usd_price: index+1,
        eur_price: index,
        //file_link: "http://www.elle.fr/Elle-Active/Cecile-Duflot-La-situation-des-meres-de-famille-monoparentales-est-particulierement-preoccupante-3741997',
        orders_counter: 0
    });
});