const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Order = require('../models/order');

// Confirmed Sender Email Address
const SENDER_EMAIL = 'coffeekraftofficial@gmail.com';

// Nodemailer Transporter setup (Port 465 Gmail SSL)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: SENDER_EMAIL,
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.trim() : ''
    },
    tls: {
        rejectUnauthorized: false
    }
});

// POST /api/orders
router.post('/', async (req, res) => {
    try {
        const { username, name, email, phone, address, payment, items, total, orderTiming } = req.body;

        // 1. Mandatory Email Check
        if (!email || !email.trim()) {
            return res.status(400).json({ success: false, error: 'Recipient email is required!' });
        }

        const cleanEmail = email.trim().toLowerCase();

        // 2. Database Save (Optional fail-safe)
        let savedOrder = null;
        try {
            savedOrder = await Order.create({
                username: username || 'Guest',
                name: name || '',
                email: cleanEmail,
                phone: phone || '',
                address: address || '',
                payment: payment || 'COD',
                items: items || '',
                total: total || '',
                orderTiming: orderTiming || new Date().toLocaleString()
            });
        } catch (dbErr) {
            console.warn("DB Save Warning (Proceeding with email):", dbErr.message);
        }

        // 3. Check App Password Config
        if (!process.env.EMAIL_PASS) {
            console.error("CRITICAL: EMAIL_PASS environment variable is missing on server!");
            return res.status(500).json({ 
                success: false, 
                error: 'Server email configuration error (EMAIL_PASS is missing).' 
            });
        }

        // 4. Send Confirmation Email
        const mailOptions = {
            from: `"Coffee Kraft ☕" <${SENDER_EMAIL}>`,
            to: cleanEmail,
            subject: `Order Confirmed! Receipt for ${name || 'Customer'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 3px solid #2c1b12; background-color: #f5ede3; color: #2c1b12;">
                    <h2 style="text-align: center; text-transform: uppercase; margin-bottom: 5px;">Coffee Kraft</h2>
                    <p style="text-align: center; font-weight: bold; margin-top: 0;">Order Receipt & Confirmation ☕</p>
                    <hr style="border: 1px solid #2c1b12;">
                    <p>Hi <b>${name || 'Valued Customer'}</b>,</p>
                    <p>Aapka order successfully confirm ho chuka hai! Receipt ki details neeche di gayi hain:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                        <tr><td style="padding: 6px 0;"><b>Customer Name:</b></td><td>${name || 'N/A'}</td></tr>
                        <tr><td style="padding: 6px 0;"><b>Order Time:</b></td><td>${orderTiming || 'N/A'}</td></tr>
                        <tr><td style="padding: 6px 0;"><b>Phone:</b></td><td>${phone || 'N/A'}</td></tr>
                        <tr><td style="padding: 6px 0;"><b>Delivery Address:</b></td><td>${address || 'N/A'}</td></tr>
                        <tr><td style="padding: 6px 0;"><b>Payment Mode:</b></td><td>${payment || 'COD'}</td></tr>
                        <tr><td style="padding: 6px 0;"><b>Items Ordered:</b></td><td>${items || 'N/A'}</td></tr>
                        <tr><td style="padding: 8px 0; border-top: 1px solid #2c1b12;"><b>Total Bill:</b></td><td style="border-top: 1px solid #2c1b12; font-size: 16px; font-weight: bold; color: #9e1b1b;">${total || 'Rs. 0'}</td></tr>
                    </table>
                    
                    <hr style="border: 1px solid #2c1b12;">
                    <p style="font-size: 12px; text-align: center; color: #5e3c2d;">Thank you for brewing with Coffee Kraft!</p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Receipt email sent. ID:", info.messageId);

        return res.status(200).json({ 
            success: true, 
            message: 'Order placed & receipt sent successfully!' 
        });

    } catch (err) {
        console.error("Order Route Error:", err.message);
        return res.status(500).json({ 
            success: false, 
            error: 'Failed to send confirmation email: ' + err.message 
        });
    }
});

module.exports = router;