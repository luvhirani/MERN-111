const express = require("express");
const productRoutes = require("./routes/product")

const app = express();

app.use(express.json());

app.get("/users",(req,res)=>{
    console.log("request received")
    res.send("users request")
})

app.use("/product",productRoutes)

app.listen(3002,()=>{
    console.log("Server started on port 3002")
})