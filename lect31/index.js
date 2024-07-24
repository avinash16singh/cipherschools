const http = require('http')
const server=http.createServer((req,res)=>{
    res.write("this is the response from first one")
    res.end()
})
server.listen(4000,()=>{
console.log(`server is running at`)
})
