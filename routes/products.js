// routes/products.js
const express = require("express");
const {
    getProducts,
    createProduct, // Importa la función para crear productos
} = require("../controllers/productController");

const router = express.Router();

router.route("/")
    .get(getProducts)    // Permite GET para obtener todos los productos
    .post(createProduct);

module.exports = router;