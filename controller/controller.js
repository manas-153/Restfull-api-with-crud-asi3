const schema=require('../database/database_schema');

const getAllProducts = async(req,res)=>
{
   try{
        const res_back=await schema.find();
        res.json({
            status:'success',
            res_back
        })
       
   }
   catch(err)
   {

    res.json({
        status:'failed',
        msg:err.message
    })

   }
}

module.exports={getAllProducts};