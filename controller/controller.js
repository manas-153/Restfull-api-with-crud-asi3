const schema=require('../database/database_schema');

const getAllProducts = async(req,res)=>
{
   try{
        const res_back=await schema.find();
        if(res_back.length)
        {
            res.json({
                status:'success',
                res_back
            })
        }
        else
        {
            res.status(400).json({
                status:'Empty Database',
                msg:"Looks like database is Empty, Please add some products"
            })
        }
        
       
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

const GetProduct= async(req,res)=>
{
   try{
        let product_id=req.params.id;
        let res_back=await schema.find({_id:product_id});
        res.json({
            status:'success',
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

const AddMultipleProducts= async(req,res)=>
{
  try
  {
      let products=req.body;
      let res_back=await schema.insertMany(products);
      res.json({
        status:'success',
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

const UpdateProduct=async(req,res)=>
{
    try
    {
        let id=req.params.id;
        let data=req.body;
        let res_back=await schema.findByIdAndUpdate(id,data);
        res.json({
            status:'success',
            msg:"Product Updated successfully",
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

const UpdateMultipleProducts = async(req,res)=>
{
    try
    {
             
    }
    catch(err)
    {

    }
}

const DeleteProduct = async(req,res)=>
{
    try
    {
        let id=req.params.id;
        let res_back=await schema.findByIdAndRemove(id);
        if(res_back)
        {
            res.json({
                status:'success',
                msg:"Product deleted successfully",
                res_back
            })

        }
        else
        {
            res.status(400).json({
                status:"failed",
                msg:"Product not Found, Looks like product had already deleted from the database"
            })
        }
       

    }
  
    catch(err)
    {
        res.status(400).json({
            status:"failed",
            msg:err.message,
        })

    }
}

module.exports={getAllProducts,AddProduct,GetProduct,AddMultipleProducts,UpdateProduct,DeleteProduct};