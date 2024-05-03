const http=require('http');
const fs=require('fs')


const server=http.createServer((req,res)=>{
 const url=req.url
 const method=req.method
 if(url=='/home')
 {
    res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Welcome to Home</h1></body>')
  res.write('</html>')
  return res.end()
 }

 
 if(url=='/')
 {
    fs.readFile("message.txt",{encoding:'utf-8'},(err,data)=>{
    res.write('<html>')
  res.write('<head><title>Enter Message</title></head>')
  res.write(`<body>${data}</body>`)
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button>Click</button</form></body>')
  res.write('</html>')
  return res.end()
 })
}
 if(url=='/node')
 {
    res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Welcome to Node JS</h1></body>')
  res.write('</html>')
  return res.end()
 }
 if(url=='/message' && method=='POST')
 {
    const body=[]
    req.on('data',(chunk)=>{
        body.push(chunk)
    })

    req.on('end',()=>{
        parseBody=Buffer.concat(body).toString()
        const data=parseBody.split("=")[1]
        fs.writeFileSync('message.txt',data)
        res.statusCode=302
        res.setHeader('Location','/')
       return res.end()
    })
    
  
 }

  /*res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello How Are You</h1></body>')
  res.write('</html>')
  res.end()*/
 
});

server.listen(4000)