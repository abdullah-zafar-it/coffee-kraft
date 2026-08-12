const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/coffeekraft');
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error('Database connection error:', err.message);
    }
};

module.exports = connectDB;