const express=require('express')
const path=require('path')
const router=express.Router()
const rooDir=require('../helper/path')

router.get('/add-product',(req,res,next)=>{
    console.log('in other middleware') 
    //res.send('<h1>Hello Express</h1>')
    res.sendFile(path.join(rooDir,'views','add-product.html'))
 })
 
 router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    
    
 })


module.exports=router