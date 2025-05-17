const { response } = require("express")
const pool = require("../config/db")

const getAllProducts = async(req,res) =>{ //localhost:3003/product/getProducts
    // console.log("get product")
    // res.send("These are the list of all Products")
    console.log(req)
    console.log(req.body)
    console.log(req.params)

    try{
        const response = await pool.query("SELECT * FROM products")
        console.log(response[0])
        res.send({message: "This is the list of all products", products:response[0]})
    }
    catch(error){
        console.log(error)
    }
}

const createNewProduct = async(req,res)=>{ //localhost:3003/product/createNewProduct
    // res.send("Created a new Product")
    console.log(req.body)
    console.log(req.params)


    let {pId,name, price} = req.body;
    try{
        const response = await pool.query("INSERT INTO PRODUCTS VALUES(?,?,?)",[pId,name,price]);
        console.log(response)
        res.send({message: "Product added succesfully"});
    }
    catch(error){
        console.log(error)
    }
}

const editProduct = async (req,res)=>{ //localhost:3003/product/editProduct/:id
    // res.send("Edited a Product")

    let pId = req.params.id;
    console.log(req.body)
    let {name, price} = req.body;
    console.log("req.body:",req.body)
    console.log(pId,name,price)
    try{
        let response = await pool.query("UPDATE products SET name=?,price=? WHERE pId=?",[name,price,pId])
        console.log(response)
        res.send({message:"Product updated"});
    }

    catch(error){
        console.log(error)
    }

}

const getOneProduct = async(req,res) =>{ //localhost:3003/product/getOneProduct/:id
    // console.log(req)
    // console.log(req.body)
    // res.send("getOneProduct")

    let pId = req.params.id;
    console.log(pId)
    try{
        const response = await pool.query("SELECT * FROM products WHERE pId = ?",[pId])
        console.log(response[0])
        res.send({message :"Product successfullt fetched using ID"})
    }
    catch(error){
        console.log(error)
    }
}

const deleteProduct = async (req,res)=>{  //localhost:3003/product/deleteProduct/:id
    console.log("req:",req)
    console.log("req.body:",req.body)
    console.log("req.params:",req.params)
    console.log("executed")
    res.send("Deleted a Product")
}

module.exports = {getAllProducts, createNewProduct, editProduct, deleteProduct,getOneProduct}