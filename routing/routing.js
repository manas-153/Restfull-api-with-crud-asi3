const express= require('express');

const { getAllProducts,addProduct,getProduct, addMultipleProducts,updateProduct, deleteProduct, updateMultipleProducts,deleteMultiple,totalProducts,filterProductsByMfgDate,productWithLowQuanity,calculateAvergareQuanity,highAndLowQuantity,getSortProducts,filterAndReviewEndpoints,recentProducts} = require('../controller/controller');


const route= express.Router();

route.get('/getAllProducts', getAllProducts);
route.post('/addProduct', addProduct)
route.get('/getProduct/:id', getProduct);
route.post('/addMultipleProducts', addMultipleProducts);
route.post("/updateProduct/:id", updateProduct);
route.get("/deleteProduct/:id", deleteProduct);
route.post("/UpdateMultiple/:parameters/:value", updateMultipleProducts);
route.get("/deleteMultiple/:key/:value",deleteMultiple);
route.get("/totalProducts",totalProducts);
route.post("/filterByMfgDate",filterProductsByMfgDate);
route.get("/productWithLowQuanity",productWithLowQuanity);
route.get('/calculateAvergareQuanity',calculateAvergareQuanity);
route.get('/highAndLowQuantity/:option',highAndLowQuantity);
route.get('/getSortProducts/:sortkey/:option',getSortProducts);
route.post('/filterAndReviewEndpoints/:key/:value',filterAndReviewEndpoints);
route.get('/getRecentProducts',recentProducts);
module.exports= route;