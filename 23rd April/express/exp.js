const express = require("express");

const app = express();

app.get("/users",(req,res)=>{
    console.log("request received")
})

app.listen(3002,()=>{
    console.log("Server started on port 3002")
})