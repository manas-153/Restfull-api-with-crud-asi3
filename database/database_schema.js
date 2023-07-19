const mongoose = require('mongoose');

const Product_Schema= mongoose.Schema({
    Product_Name:{
        required:true,
        type:String
    },
    Description:{
        required:true,
        type:String
    },
    Offer:{
         required:false,
         type:String,
         default:0
    },
    Price:{
        required:true,
        type:String
    },
    Images:{
        requred:false,
        type:Array,
    },
    category:{
        required:true,
        type:String
    },
    colors:{
        required:true,
        type:Array
    },
    sizes:{
       required:true,
       type:Array
    },
    Review:{
        required:false,
        type:Number,
        default:0
    },
    InStock:{
        required:true,
         type:Boolean,
        default:true
    }
    
    
})

module.exports=mongoose.model('product',Product_Schema);