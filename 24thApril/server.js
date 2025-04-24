const express = require("express");
const productRoutes = require("./routes/product")

const app = express();

app.get("/users",(req,res)=>{
    console.log("request received")
    res.send("users request")
})

app.use("/product",productRoutes)

app.listen(3003,()=>{
    console.log("Server started on port 3003")
})