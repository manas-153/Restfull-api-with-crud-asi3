const express= require('express');

const { getAllProducts } = require('../controller/controller');


const route= express.Router();

route.get('/all',getAllProducts)

module.exports= route;