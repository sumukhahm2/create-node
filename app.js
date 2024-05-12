const http=require('http');
const path=require('path')
const rooDir=require('./helper/path')
const express=require('express')
const bodyParser=require('body-parser')
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const contactUsRouter=require('./routes/contactUs')
const success=require('./routes/success')
const app=express()


app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRouter)
app.use('/',shopRouter)
app.use('/admin',contactUsRouter)
app.use(success)
app.use(express.static(path.join(__dirname,'public')))
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(rooDir,'views','error.html'))
})

 app.listen(3000)