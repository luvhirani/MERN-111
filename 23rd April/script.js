const http = require("http")

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url==="/users" && req.method==="POST"){
        res.end("User data posted")
    }
    else if(req.url==="/products" && req.method==="GET"){
        res.end("This is product page")
    }
    else{
        console.log(req)
        res.end("Hello GRRAS, this is a request")
    }
})

server.listen(3003,"localhost",()=>{
    console.log("server is running on port 3003")
})

