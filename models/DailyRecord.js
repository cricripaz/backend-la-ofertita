// models/DailyRecord.js
const mongoose = require("mongoose");

const dailyRecordSchema = new mongoose.Schema({
    dia: {
        type: String,
        required: [true, "El día de la semana es obligatorio"],
        enum: ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'],
        trim: true,
    },
    fecha: { // Fecha específica a la que se refiere el registro (ej. 16-06-25)
        type: Date,
        required: [true, "La fecha del registro es obligatoria"],
        unique: true, // Asegura que solo haya un registro por fecha
    },
    montoCompras: {
        type: Number,
        default: 0,
        min: [0, "El monto de compras no puede ser negativo"],
    },
    montoAhorro: {
        type: Number,
        default: 0,
        min: [0, "El monto de ahorro no puede ser negativo"],
    },
    cajaAdentro: {
        type: Number,
        default: 0,
        min: [0, "El monto de caja adentro no puede ser negativo"],
    },
    cajaAfuera: {
        type: Number,
        default: 0,
        min: [0, "El monto de caja afuera no puede ser negativo"],
    },
    totalQr: {
        type: Number,
        default: 0,
        min: [0, "El total QR no puede ser negativo"],
    },
    total: {
        type: Number,
        default: 0,
        min: [0, "El total no puede ser negativo"],
    },
    montoAyer: { // Columna "MONTO DE AYER"
        type: Number,
        default: 0,
        min: [0, "El monto de ayer no puede ser negativo"],
    },
    ventaDelDia: { // Columna "VENTA DEL DIA"
        type: Number,
        default: 0,
        min: [0, "La venta del día no puede ser negativa"],
    },
    createdAt: { // Fecha y hora de creación de este documento en la base de datos
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("DailyRecord", dailyRecordSchema);