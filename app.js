const http=require('http');
//const fs=require('fs')

const routes=require('./routes')
console.log(routes)
const server=http.createServer(routes);

server.listen(3000,function(error){
    if(error)
    {
       console.log(error)
    }
    else{
       console.log('success')
    }
})