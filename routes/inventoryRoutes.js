const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

const PRODUCT_NAMES = [
    'House Special Roast', 'Iced Vanilla Brew', 'Caramel Cloud Latte', 'Premium Gold Drip',
    'Special Mocha', 'Espresso', 'Karak Chai', 'Club Sandwich',
    'Spanish Latte', 'Classic Cortado', 'Flat White', 'Dark Roast Drip',
    'Americano Black', 'Classic Cappuccino', 'Café Latte', 'Irish Cream Brew',
    'Biscoff Shake', 'Dark Choco Shake', 'Oreo Blast Shake', 'Peanut Butter Shake',
    'Vanilla Velvet Shake', 'Mango Alphonso Craze', 'Strawberry Fusion', 'Nutella Loaded Malt',
    'Nutella Croissant', 'Double Choco Brownie', 'Tiramisu Slice', 'Blueberry Muffin',
    'Lotus Cheesecake', 'Almond Biscotti Crust', 'Cinnamon Roll Bun', 'Red Velvet Pastry'
];

// @route   GET /api/inventory
// @desc    Get all product stock levels (with auto-seeding)
router.get('/', async (req, res) => {
    try {
        // Find all existing records
        let existing = await Inventory.find();
        const existingNames = existing.map(item => item.productName);

        // Check if any product is missing and seed it with a random quantity (10 to 45)
        const missingProducts = PRODUCT_NAMES.filter(name => !existingNames.includes(name));

        if (missingProducts.length > 0) {
            const seedData = missingProducts.map(name => {
                const randomQty = Math.floor(Math.random() * 36) + 10;
                return { productName: name, quantity: randomQty };
            });
            await Inventory.insertMany(seedData);
            console.log(`[Inventory Seeding] Seeded ${missingProducts.length} missing products with random quantities.`);
            // Refresh existing list
            existing = await Inventory.find();
        }

        // Convert any existing default quantity of 15 to a random quantity (10 to 45)
        for (let item of existing) {
            if (item.quantity === 15) {
                const randomQty = Math.floor(Math.random() * 36) + 10;
                item.quantity = randomQty;
                await item.save();
                console.log(`[Inventory Randomized] Updated ${item.productName} from default 15 to random quantity ${randomQty}.`);
            }
        }

        // Fetch all again to get updated list
        const allInventory = await Inventory.find();

        // Convert array of objects to map: { name: quantity }
        const inventoryMap = {};
        allInventory.forEach(item => {
            inventoryMap[item.productName] = item.quantity;
        });

        res.json({ success: true, inventory: inventoryMap });
    } catch (error) {
        console.error(`Inventory fetch error: ${error.message}`);
        res.status(500).json({ success: false, error: 'Server Error fetching inventory' });
    }
});

// @route   POST /api/inventory/update
// @desc    Update product stock level
router.post('/update', async (req, res) => {
    try {
        const { productName, quantity } = req.body;

        if (!productName || quantity === undefined) {
            return res.status(400).json({ success: false, error: 'productName and quantity are required' });
        }

        const updated = await Inventory.findOneAndUpdate(
            { productName },
            { quantity: parseInt(quantity) },
            { new: true, upsert: true }
        );

        console.log(`[Inventory Updated] Product: ${productName}, Quantity: ${quantity}`);
        res.json({ success: true, productName: updated.productName, quantity: updated.quantity });
    } catch (error) {
        console.error(`Inventory update error: ${error.message}`);
        res.status(500).json({ success: false, error: 'Server Error updating inventory' });
    }
});

module.exports = router;