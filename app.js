const http=require('http');

const server=http.createServer((req,res)=>{
 const url=req.url
 if(url=='/home')
 {
    res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Welcome to Home</h1></body>')
  res.write('</html>')
  return res.end()
 }
 if(url=='/about')
 {
    res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Welcome About Us</h1></body>')
  res.write('</html>')
  return res.end()
 }
 if(url=='/node')
 {
    res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Welcome to Node JS</h1></body>')
  res.write('</html>')
  return res.end()
 }
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello How Are You</h1></body>')
  res.write('</html>')
  res.end()
});

server.listen(4000)