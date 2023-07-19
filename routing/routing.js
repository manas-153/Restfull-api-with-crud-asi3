const express= require('express');

const { getAllProducts,AddProduct,GetProduct, AddMultipleProducts,UpdateProduct, DeleteProduct} = require('../controller/controller');


const route= express.Router();

route.get('/all',getAllProducts);
route.post('/add',AddProduct)
route.get('/get/:id',GetProduct);
route.post('/add_multiple',AddMultipleProducts);
route.post("/update_One/:id",UpdateProduct);
route.get("/delete/:id",DeleteProduct);
module.exports= route;