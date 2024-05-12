const express=require('express')
const path=require('path')
const dirName=require('../helper/path')
const router=express.Router()

router.get('/contactus',(req,res,next)=>{
   // console.log('in the middleware') 
    res.sendFile(path.join(dirName,'views','contact-us.html'))
    
 })

 module.exports=router