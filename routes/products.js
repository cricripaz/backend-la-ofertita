// routes/products.js
const express = require("express");
const {
    getProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/")
    .get(getProducts); // Solo GET para la ruta base

module.exports = router;