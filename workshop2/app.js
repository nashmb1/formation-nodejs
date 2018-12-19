var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var express = require('express');
bodyParser = require('body-parser');
const product = require(__dirname + '/productModel.js');
const authenticate =  require(__dirname + '/authentication.js');
const orderManger =  require(__dirname + '/orderManager.js');

var fs = require('fs');

var app = new express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    product.find((err, data) => {
        res.render('index', {products: data});  
    });
});

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login', function(req, res) {
    authenticate(req.body.username, req.body.password, result => {
        if (false === result) {
            return res.status(401).json({ message: 'Login error'});
        }
        res.send("ok");
    });
});

app.get('/order/:productid/:userid', function(req, res) {
    orderManger.addOrder(req.params.productid, req.params.userid, result => {
        if (!result) {
            return res.status(500).json({ message: 'And error occured'});
        }
        return res.json(result);
    });
});

app.get('/orders/:userid', function(req, res) {
    orderManger.getUserOrders(req.params.userid, result => {
        if (!result) {
            return res.status(500).json({ message: 'And error occured'});
        }
        return res.json(result);
    });
});

app.listen(8080);