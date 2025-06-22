// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "La categoría es obligatoria"],
        trim: true,
    },
    name: {
        type: String,
        required: [true, "El nombre del producto es obligatorio"],
        trim: true,
    },
    brand: {
        type: String,
        required: [true, "La marca es obligatoria"],
        trim: true,
    },
    barcode: {
        type: String,
        unique: true, // Los códigos de barras suelen ser únicos
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "El precio es obligatorio"],
        min: [0, "El precio no puede ser negativo"],
    },
    unit: {
        type: String,
        required: [true, "La unidad de medida es obligatoria"],
        trim: true,
    },
    presentation: {
        type: String,
        trim: true,
    },

});

module.exports = mongoose.model("Product", productSchema);