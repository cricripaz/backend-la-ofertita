// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");



// Cargar variables de entorno
dotenv.config({ path: "./.env" });

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware para parsear JSON (se mantiene por si acaso, aunque no es estrictamente necesario para solo GET)
app.use(express.json());

// Ruta de prueba inicial
app.get("/", (req, res) => {
    res.send("API de La OFERTITA funcionando... ¡Bienvenido!");
});



// Importar rutas de productos
const productRoutes = require("./routes/products");
const dailyRecordRoutes = require("./routes/dailyRecords");

// Montar rutas
app.use("/api/products", productRoutes);
app.use("/api/dailyrecords", dailyRecordRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor de la API de Supermercado ejecutándose en el puerto ${PORT}`);
});