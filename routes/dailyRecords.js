// routes/dailyRecords.js
const express = require("express");
const {
    getDailyRecords,
    createDailyRecord,
} = require("../controllers/dailyRecordController");

const router = express.Router();

router.route("/")
    .get(getDailyRecords)   // Endpoint para obtener todos los registros
    .post(createDailyRecord); // Endpoint para crear un nuevo registro

module.exports = router;