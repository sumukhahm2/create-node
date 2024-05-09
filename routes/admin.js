const express=require('express')

const router=express.Router()


router.get('/add-product',(req,res,next)=>{
    console.log('in other middleware') 
    //res.send('<h1>Hello Express</h1>')
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"/><button>Add Product</button></form><form action="/admin/add-product" method="POST"><input type="text" name="product"/><button>Add Product</button></form>')
    
 })
 
 router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    
    
 })


module.exports=router