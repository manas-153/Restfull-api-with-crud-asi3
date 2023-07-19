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

const AddProduct = async(req,res)=>
{
    try{
          let data=req.body;
          let res_back= await new schema(data).save(data);
          res.json({
            status:'success',
            msg:'Product added Succesfully',
            res_back
          })
 
    }
    catch(err)
    {
        res.status(400).json({
            status:'failed',
            msg:err.message
        })

    }
}

module.exports={getAllProducts,AddProduct};