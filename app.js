const http=require('http');
//const fs=require('fs')
const express=require('express')

const app=express()

app.use((req,res,next)=>{
   console.log('in the middleware') 
   next()
})
app.use((req,res,next)=>{
    console.log('in other middleware') 
    //res.send('<h1>Hello Express</h1>')
    res.send( { key1: 'value' })
 })

 app.listen(3000)