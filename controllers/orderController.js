// controllers/orderController.js
const Order = require('../models/Order');
const asyncHandler = require('express-async-handler');

// @desc    Register a new daily order
// @route   POST /api/orders
// @access  Public
const registerOrder = asyncHandler(async (req, res) => {
    const { name, amount, notes, date, state } = req.body; // Include 'state' in destructuring

    // Input Validation
    // 'state' is handled by Mongoose default or required validation
    if (!name || !amount || !date) {
        res.status(400);
        throw new Error('Please include all required fields: name, amount, and date.');
    }

    // Order Creation
    const order = await Order.create({
        name,
        amount,
        notes,
        date: new Date(date), // Ensure date is stored as a Date object
        state // Pass the state directly from req.body (or it will use default)
    });

    // Response
    if (order) {
        res.status(201).json({
            success: true,
            message: 'Order registered successfully',
            data: order
        });
    } else {
        res.status(400);
        throw new Error('Invalid order data provided. Order could not be registered.');
    }
});

// @desc    Get all daily orders
// @route   GET /api/orders
// @access  Public
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.status(200).json({
        success: true,
        count: orders.length,
        data: orders
    });
});

module.exports = {
    registerOrder,
    getOrders
};