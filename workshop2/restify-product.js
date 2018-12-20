const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const product = require(__dirname + '/productModel.js');
const order = require(__dirname + '/orderModel.js');
const user = require(__dirname + '/userModel.js');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost:27017/test')

restify.serve(router, product);
restify.serve(router, order);
restify.serve(router, user);

app.use(router);

app.listen(8085, () => {
  console.log('Express server listening on port 8085')
})
