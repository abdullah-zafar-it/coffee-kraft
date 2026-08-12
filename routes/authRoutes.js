const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { user, pass, addr } = req.body;
        if (!user || !pass) {
            return res.status(400).json({ success: false, error: 'User and pass required' });
        }

        const existingUser = await User.findOne({ user });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Username already taken!' });
        }

        const newUser = new User({ user, pass, addr });
        await newUser.save();
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { user, pass } = req.body;
        const foundUser = await User.findOne({ user, pass });
        if (foundUser) {
            res.json({ success: true, user: foundUser });
        } else {
            res.status(400).json({ success: false, error: 'Invalid Username or Password!' });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;