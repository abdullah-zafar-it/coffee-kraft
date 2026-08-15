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

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Static Files (Current directory & css folder)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(__dirname));

// 2. Direct Static Endpoints
app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

// 3. API Routes
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

// 4. Main HTML Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 5. Catch-all Route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`☕ Coffee Kraft server running on port ${PORT}`);
  });
}

module.exports = app;