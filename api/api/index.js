const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes.js');
const authRoutes = require('../routes/authRoutes.js');
const inventoryRoutes = require('../routes/inventoryRoutes.js');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle both direct and /api prefixed routes
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/inventory', inventoryRoutes);
app.use('/inventory', inventoryRoutes);

app.use('/api/orders', orderRoutes);
app.use('/orders', orderRoutes);

module.exports = app;