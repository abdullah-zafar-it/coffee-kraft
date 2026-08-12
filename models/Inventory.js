const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 15,
        min: 0
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);