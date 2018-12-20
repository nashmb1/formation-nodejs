var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var express = require('express');
bodyParser = require('body-parser');
var helmet = require('helmet');
const product = require(__dirname + '/productModel.js');
const authenticate =  require(__dirname + '/authentication.js');
const orderManger =  require(__dirname + '/orderManager.js');
const productManger =  require(__dirname + '/productManager.js');

var fs = require('fs');

var app = new express();

app.use(helmet());
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views')); 

app.get('/', function(req, res) {
    product.find((err, data) => {
        res.render('index', {products: data});  
    });
});

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login', async function(req, res) {
    let result = await authenticate(req.body.username, req.body.password);

     if (!result) {
        return res.status(401).json({ message: 'Login error'});
     }
     res.send("ok");
});

app.get('/order/:productid/:userid', function(req, res) {
    orderManger.addOrder(req.params.productid, req.params.userid, result => {
        if (!result) {
            return res.status(500).json({ message: 'And error occured'});
        }
        return res.json(result);
    });
});
"debugger;"
app.get('/orders/:userid', function(req, res) {
    orderManger.getUserOrders(req.params.userid, result => {
        if (!result) {
            return res.status(500).json({ message: 'And error occured'});
        }
        return res.json(result);
    });
});

app.get('/products/:userid', (req, res) => {

    console.log('req.params', req.params.userid);
    async () => {
        let products = await productManger.findUserProducts();
        console.log(products);
        res.json(await productManger.findUserProducts());
    };
});

app.listen(80880);