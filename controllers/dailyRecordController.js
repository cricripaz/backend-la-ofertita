// controllers/dailyRecordController.js
const DailyRecord = require("../models/DailyRecord");

// @desc    Obtener todos los registros diarios
// @route   GET /api/dailyrecords
// @access  Public
const getDailyRecords = async (req, res) => {
    try {
        const records = await DailyRecord.find().sort({ fecha: 1 }); // Ordenar por fecha ascendente
        res.status(200).json({ success: true, count: records.length, data: records });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Crear un nuevo registro diario
// @route   POST /api/dailyrecords
// @access  Public
const createDailyRecord = async (req, res) => {
    try {
        const record = await DailyRecord.create(req.body);
        res.status(201).json({ success: true, data: record });
    } catch (error) {
        // Manejo de errores de validación (campos requeridos, enums, min, etc.)
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages.join(', ') });
        }
        // Manejo de error de clave duplicada (ej. si la 'fecha' ya existe)
        if (error.code === 11000) {
            return res.status(400).json({ success: false, error: 'Ya existe un registro para esta fecha.' });
        }
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getDailyRecords,
    createDailyRecord,
};