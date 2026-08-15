const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes.js');
const authRoutes = require('../routes/authRoutes.js');
const inventoryRoutes = require('../routes/inventoryRoutes.js');

// Database connection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes (Dono prefixes support karega)
app.use(['/api/auth', '/auth'], authRoutes);
app.use(['/api/inventory', '/inventory'], inventoryRoutes);
app.use(['/api/orders', '/orders'], orderRoutes);

module.exports = app;