// controllers/productController.js
const Product = require("../models/product"); // Importa el modelo de producto

// @desc    Obtener todos los productos
// @route   GET /api/products
// @access  Public

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, count: products.length, data: products });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Crear un nuevo producto
// @route   POST /api/products
// @access  Public
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body); // Crea un nuevo producto con los datos del cuerpo de la solicitud
        res.status(201).json({ success: true, data: product }); // Responde con el producto creado y estado 201 (Created)
    } catch (error) {
        // Manejar errores de validación de Mongoose o duplicados
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages.join(', ') });
        }
        // Manejar error de clave duplicada (ej. name o barcode ya existen)
        if (error.code === 11000) { // Código de error de MongoDB para duplicados
            return res.status(400).json({ success: false, error: 'Producto con este nombre o código de barras ya existe.' });
        }
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getProducts,
    createProduct
};