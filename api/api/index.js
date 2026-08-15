const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes.js');
const authRoutes = require('../routes/authRoutes.js');
const inventoryRoutes = require('../routes/inventoryRoutes.js');

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

module.exports = app;