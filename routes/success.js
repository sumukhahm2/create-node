const express=require('express');
const path=require('path')
const dirName=require('../helper/path')
const router=express.Router()


shopRouter.get('/success',(req,res,next)=>{
    console.log('in the middleware') 
    res.sendFile(path.join(dirName,'views','shop.html'))
    
 })

 module.exports=router