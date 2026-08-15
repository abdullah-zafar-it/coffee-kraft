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

// 1. Static Folders
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, '.')));

// 2. Direct Static File Fallbacks (Vercel ke 404 fix ke liye)
app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});

app.get('/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

// 3. API Routes
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

// 4. HTML Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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