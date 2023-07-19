// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

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
        type:boolean,
        default:true
    }
    
    
})

module.exports=mongoose.model('product',Product_Schema);