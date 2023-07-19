const express= require('express');

const { getAllProducts,AddProduct} = require('../controller/controller');


const route= express.Router();

route.get('/all',getAllProducts);
route.post('/add',AddProduct)

module.exports= route;