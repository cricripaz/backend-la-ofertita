// server.js
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors"); // Para mensajes bonitos en la consola (opcional)
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware"); // Importar el middleware de errores

// Cargar variables de entorno
dotenv.config({ path: "./.env" });

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware para parsear JSON y datos de formularios URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Asegúrate de tener este también

// Ruta de prueba inicial
app.get("/", (req, res) => {
    res.send("API de La OFERTITA funcionando... ¡Bienvenido!");
});

// Importar rutas existentes (productos, dailyRecords)
const productRoutes = require("./routes/products");
const dailyRecordRoutes = require("./routes/dailyRecords");
// ¡Importar las nuevas rutas de pedidos!
const orderRoutes = require("./routes/orderRoutes");

// Montar rutas
app.use("/api/products", productRoutes);
app.use("/api/dailyrecords", dailyRecordRoutes);
// ¡Montar las nuevas rutas de pedidos!
app.use("/api/orders", orderRoutes);

// Middleware de manejo de errores (debe ir al final de todas las rutas)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor de la API de La OFERTITA ejecutándose en el puerto ${PORT}`.yellow.bold); // Mensaje más descriptivo
});
