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
    Price:{
        required:true,
        type:String
    },
    Images:{
        requred:false,
        type:Array,
    },
    Review:{
        required:false,
        type:Number
    },
    InStock:{
        required:true,
         type:Boolean,
        default:true
    }
    
    
})

module.exports=mongoose.model('product',Product_Schema);