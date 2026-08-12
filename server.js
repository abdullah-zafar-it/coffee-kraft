const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const inventoryRoutes = require('./routes/inventoryRoutes.js');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

// Serve static frontend files
app.use(express.static(__dirname));

// Fallback to index.html for SPA-like route queries
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`☕ Coffee Kraft server running on port ${PORT}`);
  console.log(`🔗 Web UI: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
