const http= require('http');

const server=http.createServer((req,res)=>{
    res.setHeader({'content-Type':'text/html'})
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()
})

server.listen(3000,()=>{
    console.log(`server running on http://localhost:3000/`)
});