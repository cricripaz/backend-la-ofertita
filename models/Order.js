// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Order name is required'],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, 'Order amount is required'],
        min: [0, 'Amount cannot be negative']
    },
    notes: {
        type: String,
        trim: true,
        default: ''
    },
    date: {
        type: Date,
        required: [true, 'Order date is required'],
        default: Date.now
    },
    state: { // <<-- NEW FIELD: Now a Boolean -->>
        type: Boolean,
        required: [true, 'Order state is required'],
        default: false // Set default to false (e.g., 'not completed', 'not processed', 'inactive')
                       // Change to 'true' if the default state means 'active' or 'open'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);