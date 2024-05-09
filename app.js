const http=require('http');
//const fs=require('fs')
const express=require('express')
const bodyParser=require('body-parser')
const app=express()


app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
   console.log('in other middleware') 
   //res.send('<h1>Hello Express</h1>')
   res.send('<form action="/product" method="POST"><input type="text" name="product"/><button>Add Product</button></form><form action="/product" method="POST"><input type="text" name="product"/><button>Add Product</button></form>')
   
})

app.post('/product',(req,res,next)=>{
   console.log(req.body)
   
   
})


app.use('/',(req,res,next)=>{
   console.log('in the middleware') 
   res.send('<h1>Hello Express</h1>')
   
})


 app.listen(3000)