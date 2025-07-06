// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { registerOrder, getOrders } = require('../controllers/orderController');

router.route('/')
    .post(registerOrder)
    .get(getOrders);

module.exports = router;