const express=require('express');

const shopRouter=express.Router()


shopRouter.get('/',(req,res,next)=>{
    console.log('in the middleware') 
    res.send('<h1>Hello Express</h1>')
    
 })

 module.exports=shopRouter