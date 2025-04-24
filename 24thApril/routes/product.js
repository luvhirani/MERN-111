const express = require("express")
const {getAllProducts, createNewProduct, editProduct, deleteProduct} = require("../controllers/product")


const router = express.Router()

router.get("/getProducts", getAllProducts)

router.post("/createNewProduct", createNewProduct)

router.put("/editProduct", editProduct)

router.delete("/deleteProduct", deleteProduct)

module.exports = router;

