const express = require("express")
const {getAllProducts, createNewProduct, editProduct, deleteProduct, getOneProduct} = require("../controllers/product")

const router = express.Router()

router.get("/getProducts", getAllProducts)

router.post("/createNewProduct", createNewProduct)

router.put("/editProduct/:id", editProduct)

router.delete("/deleteProduct/:id", deleteProduct)

router.get("/getOneProduct/:id",getOneProduct);

module.exports = router;

