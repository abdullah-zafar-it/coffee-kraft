const mongoose = require('mongoose');
const Inventory = require('./models/Inventory');

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

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect('mongodb://localhost:27017/coffeekraft');
    console.log("Connected. Clearing old inventories...");
    await Inventory.deleteMany({});
    
    console.log("Inserting random quantities...");
    const seedData = PRODUCT_NAMES.map(name => {
      const randomQty = Math.floor(Math.random() * 36) + 10; // 10 to 45
      return { productName: name, quantity: randomQty };
    });
    
    await Inventory.insertMany(seedData);
    console.log("Database seeded successfully with accurate random quantities!");
    
    const items = await Inventory.find();
    console.log("\n--- Current seeded database quantities ---");
    items.forEach(item => {
      console.log(`- ${item.productName}: ${item.quantity}`);
    });
    console.log("------------------------------------------");
    
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seed();
