const express= require('express');

const { getAllProducts,AddProduct,GetProduct} = require('../controller/controller');


const route= express.Router();

route.get('/all',getAllProducts);
route.post('/add',AddProduct)
route.get('/get/:id',GetProduct)
module.exports= route;