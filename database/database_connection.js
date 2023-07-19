const mongoose = require('mongoose');

const conn = async()=>
{
    await mongoose.connect('mongodb://127.0.0.1:27017/restful-api-crud-asi3').then((res)=>
    {
        console.log("Database connected successfully");
    }).catch(err=>
        {
            console.log(err.message);
        })
}

module.exports=conn;