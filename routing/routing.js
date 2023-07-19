const express= require('express');

const { getAllProducts,AddProduct,GetProduct, AddMultipleProducts} = require('../controller/controller');


const route= express.Router();

route.get('/all',getAllProducts);
route.post('/add',AddProduct)
route.get('/get/:id',GetProduct);
route.post('/add_multiple',AddMultipleProducts);
module.exports= route;