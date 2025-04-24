const getAllProducts = (req,res) =>{
    console.log("get product")
    res.send("These are the list of all Products")
}

const createNewProduct = (req,res)=>{
    res.send("Created a new Product")
}

const editProduct = (req,res)=>{
    res.send("Edited a Product")
}

const deleteProduct = (req,res)=>{
    res.send("Deleted a Product")
}

module.exports = {getAllProducts, createNewProduct, editProduct, deleteProduct}