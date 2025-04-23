// const path = require("path")
// const dirname = path.dirname("/Users/luvhirani/Desktop/MERN 111/21st April")
// console.log(dirname)
// const basename= path.basename("/Users/luvhirani/Desktop/MERN 111/21st April")
// console.log(basename)
// console.log(path.)

// const EventEmitter = require("events")

// const event = new EventEmitter();

//event creation/event handler
// event.on("hello",()=>{
//     console.log("event is triggered")
// })
// event.on("hello",handler )

// function handler (){
//     console.log("event is triggered")
// }

//event call
// event.emit("hello");
// event.emit("hello");
// event.off("hello",handler)

// event.emit("hello");
// event.emit("hello");
// API - Application Prgramming Interface

const http = require("http")

const server = http.createServer((req,res)=>{
    console.log(req)
    res.end("Hello GRRAS, this is a request")
})

server.listen(3000,"localhost",()=>{
    console.log("server is running on port 3000")
})