// config/db.js
const mongoose = require("mongoose");

const uri = "mongodb+srv://cricripaz:rnAVvyORwl7tq9PP@la-ofertita.d8yr0na.mongodb.net/?retryWrites=true&w=majority&appName=la-ofertita";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar a MongoDB: ${error.message}`);
        process.exit(1); // Sale del proceso con un error
    }
};

module.exports = connectDB;