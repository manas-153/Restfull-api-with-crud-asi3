const schema=require('../database/database_schema');

let threshold_QuanityLOw = 25;
let threshold_QuanityHigh = 40;

const currentDate=new Date();

let threeDaysAgo = new Date(currentDate.setDate(currentDate.getDate()-20)).toISOString();


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

const addProduct = async(req,res)=>
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

const getProduct= async(req,res)=>
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

const addMultipleProducts= async(req,res)=>
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

const updateProduct=async(req,res)=>
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

const updateMultipleProducts = async(req,res)=>
{
    try
    {
      let keyValue=req.params.parameters;
    
      let value1=req.params.value.charAt(0).toUpperCase() + req.params.value.slice(1);
      
      const updateQuery = {[keyValue]:value1};
      console.log(updateQuery);

       
      let data=await schema.updateMany(updateQuery, {$set:req.body});

      if(data.modifiedCount)
      {
        res.json({
            status:"success",
            msg:"Products Updated successfully",
            data
          })

      }

      else{

        res.json({
            status:"failed",
            msg:"No records matches to update",
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

const deleteProduct = async(req,res)=>
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

const deleteMultiple = async(req,res)=>
{
 try
 {
    let key=req.params.key;

    let value = req.params.value;

    let query= {[key]:value};
    console.log(query);
    let res_back=await schema.deleteMany(query);

    res.json({
        status:"success",
        msg:"Data deleted successfully",
        res_back,
    })

 }
 catch(err)
 {
    res.json({
        status:"Failed",
        msg:err.message,
    })
 }
}


// assingment-4 additions 

const totalProducts = async(req,res)=>
{
    try
    {
         let res_back=await schema.find();
    
         res.json({
            "status":"success",
             Total_Products_count : res_back.length
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

const filterProductsByMfgDate = async(req,res)=>
{
    try
    {
           let fromDate=new Date(req.body.from).toISOString();
           let toDate=new Date(req.body.to).toISOString();

           if(fromDate<toDate)
           {

            let res_back= await schema.find({
            
                Mfgdate: { $gte:fromDate,$lte: toDate}
         }) 
         
         
         if(res_back.length)
         {
             res.send({
             status:"Success",
             msg:`Product manufactured from ${fromDate} to ${toDate} date`,
            res_back
 
             })
 
         }
        else
             {
                 res.json({
                     status:"failed",
                     msg:`There is no such records found for these particular dates`,
             
                   })
 
          }

           }

           else
           {
              res.status(400).json({
                status:'failed',
                msg:"from date can't be greater than to date"
              })
           }    

    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed",
            msg:err.message
        })
    }
}

const productWithLowQuanity =async(req,res)=>
{
    try
    {
       let res_back=await schema.find({quantity:{$lt:threshold_QuanityLOw}}); 

       if(res_back.length)
       {
           res.json({
            status:'success',
            msg: `We have ${res_back.length} Produts with low quanity`,
            res_back
           });
       }
       else
       {
        res.status(400).json({
            status:"failed",
            msg:"No Products was found with low quanity"
        })
       }
      
    }
    catch(err)
    {
        res.status(400).json({
            status:'failed',
            msg:err.message,
        })
    }
}

const calculateAvergareQuanity = async(req,res)=>
{
    try
    {
        let res_back=await schema.find({},{"quantity":1,_id:0});

        if(res_back.length)
        {
        let totalQuanity=res_back.reduce((acc,curr)=>
        {
             return acc+=curr.quantity
        },0)

        res.send({
            "status":"success",
            msg:`Total quanity of products is ${totalQuanity}`,
             averageQuanity: Math.round(totalQuanity/res_back.length), 
        });

    }

    else
    {
        res.status(400).send({
            status:'failed',
            msg:'No products found in the database'
        })
    }

}
    catch(err)
    {
          res.send(err.message);
    }
}

const highAndLowQuantity =async(req,res)=>
{
    try{
        let user_req=req.params.option;
        let res_back;
        let option;

        if(user_req==1)
        {
            option="high";
            res_back=await schema.find({
                 quantity:{$gte:threshold_QuanityHigh}
            });
        }
        else if(user_req==0)
        {
            option="Low";
            res_back=await schema.find({
                quantity:{$lte:threshold_QuanityLOw}
           });
             
        }

        else{
            res.status({
                status:"failed",
                msg:'Invalid Request Error, Please make the request between 0 and 1',
            })
            return;
        }

        res.send({
            "status":"success",
            msg:`Product with ${option} quanity is ${res_back.length}`,
            res_back
        });

        }
            
    catch(err)
    {
           res.send(err.message);
    }
}

const getSortProducts = async(req,res)=>
{
  try
    {
         let key=req.params.sortkey;
         let option=req.params.option;

         if(option!=1 && option!=-1)
         {
            res.status(400).send({
                status:'failed',
                msg:'Invalid Request, PLease make the request between 1 and -1',
              
            })

            return;
         }
         let order = option==1 ? "Ascending" : "Descending";
         let res_back= await schema.find().sort({[key]:option});

         res.send({
            status:"success",
            msg:`${res_back.length} Products has been sorted in ${order} order`,
            res_back
         });
    }
    catch(err)
    {
        res.status(400).send({
            status:'failed',
            masg:err.message
        }
            );
    }
}

const filterAndReviewEndpoints = async(req,res)=>
{
    let key=req.params.key;
    let value=req.params.value;

    let show_attributes={
        _id:0,
        [key]:1,
        ...req.body,
    }

    try
    {
         let res_back=await schema.find({[key]:{$in:value}},show_attributes);


         res_back.length ?  res.send({
            status:'success',
            msg:`${res_back.length} products find with this ${key}`,
            res_back
         }) : res.status(400).send({
            "status":'failed',
            msg:`No such product found with this ${key}`
         })
        
    }

    catch(err)
    {
         res.send({
            status:'success',
            msg:err.message
         });
    }
}

const recentProducts = async(req,res)=>
{

    try
    {
        let res_back=await schema.find({
            
             Mfgdate:{
                $lte:new Date().toISOString(),
                $gte:threeDaysAgo
             }
        }).sort({"Mfgdate":1})

        res.send({
            status:'success',
            msg:`${res_back.length} Product found with Recent manufacturing date`,
            res_back
        })
    }
    catch(err)
    {

    }
}

module.exports={getAllProducts,addProduct,getProduct,addMultipleProducts,updateProduct,deleteProduct,updateMultipleProducts,deleteMultiple,totalProducts,filterProductsByMfgDate,productWithLowQuanity,calculateAvergareQuanity,highAndLowQuantity,getSortProducts,filterAndReviewEndpoints,recentProducts};