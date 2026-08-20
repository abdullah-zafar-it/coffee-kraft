const nodemailer = require('nodemailer');
// Agar aapka MongoDB Order model yahan import hai:
const Order = require('../models/order');

// 1. Gmail SMTP Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'yourcoffeebrand@gmail.com', // Aapka email
        pass: process.env.EMAIL_PASS || 'your_16_digit_app_password' // Gmail 16-digit App password
    }
});

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        const { name, phone, address, payment, items, total, orderTiming, email } = req.body;

        // 2. Database me EMAIL KE BAGHAIR save karein
        const newOrder = new Order({
            name,
            phone,
            address,
            payment,
            items,
            total,
            orderTiming
            // email yahan add nahi kiya -> database me store nahi hoga
        });

        await newOrder.save();

        // 3. User ko Direct Gmail Receipt Send Karein
        if (email) {
            await transporter.sendMail({
                from: '"Coffee Kraft ☕" <yourcoffeebrand@gmail.com>',
                to: email, // Form se aane wali user email
                subject: `Order Confirmed - Receipt for ${name} ☕`,
                html: `
                    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 3px solid #2c1b12; background: #f5ede3; color: #2c1b12;">
                        <h2 style="text-transform: uppercase; margin-top: 0; text-align: center; border-bottom: 2px solid #2c1b12; padding-bottom: 10px;">Coffee Kraft Receipt</h2>
                        <p>Hi <b>${name}</b>,</p>
                        <p>Aapka order receive ho gaya hai! Fresh beans roast kiye ja rahe hain.</p>
                        <div style="background: #fff; padding: 12px; border: 2px solid #2c1b12; margin: 15px 0;">
                            <p style="margin: 4px 0;"><b>Items:</b> ${items}</p>
                            <p style="margin: 4px 0;"><b>Total Bill:</b> <span style="color: #9e1b1b; font-weight: bold;">${total}</span></p>
                            <p style="margin: 4px 0;"><b>Payment Method:</b> ${payment}</p>
                            <p style="margin: 4px 0;"><b>Delivery Address:</b> ${address}</p>
                            <p style="margin: 4px 0;"><b>Order Time:</b> ${orderTiming}</p>
                        </div>
                        <p style="text-align: center; font-size: 0.85rem; color: #5e3c2d; margin-bottom: 0;">Coffee Kraft • Premium Signature Blends</p>
                    </div>
                `
            });
        }

        return res.status(200).json({ success: true, message: 'Order placed & email sent!' });

    } catch (err) {
        console.error("Order processing error:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
};