const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Create New Order
router.post('/', async (req, res) => {
  try {
    const { name, phone, address, payment, items, total } = req.body;

    if (!name || !phone || !address || !items) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const newOrder = new Order({ name, phone, address, payment, items, total });
    await newOrder.save();

    res.json({ success: true, message: 'Order saved to MongoDB!' });
  } catch (err) {
    console.error("Order process error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;