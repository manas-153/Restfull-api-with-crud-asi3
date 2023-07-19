const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const conn = require('../database/database_connection');
require('dotenv').config()

const app= express();

const PORT = 8000 || process.env.PORT;

// middlewares 

app.use(bodyParser.json());
app.use(cors());

// express routing 

app.get('/',(req,res)=>
{
    res.send("Hello users");
})

app.listen(PORT,()=>
{
    console.log(`server is listening on ${PORT} port`);
    conn();
})