import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const packages = [
  {
    name: 'Alpine Summit Expedition',
    category: 'Adventure',
    badge: 'Best Seller',
    image: '/images/alpine-summit.avif',
    duration: '7 Days / 5 Nights',
    price: 1299,
    features: ['Expert Guided Trekking', 'Panoramic Peak Views', 'Luxury Mountain Lodge'],
  },
  {
    name: 'Historic European Charms',
    category: 'Culture',
    badge: 'Cultural',
    image: '/images/historic-european.avif',
    duration: '10 Days / 9 Nights',
    price: 2450,
    features: ['Cobblestone City Tours', 'Traditional Gastronomy', 'Art Gallery Access'],
  },
  {
    name: 'Amazonian Canopy Quest',
    category: 'Nature',
    badge: 'Adventure',
    image: '/images/amazonian-canopy.jpg',
    duration: '5 Days / 4 Nights',
    price: 980,
    features: ['Wildlife Discovery', 'River Boat Safaris', 'Eco-Friendly Camping'],
  },
];

await pool.query('TRUNCATE TABLE packages RESTART IDENTITY');

for (const travelPackage of packages) {
  await pool.query(
    `INSERT INTO packages (name, category, badge, image, duration, price, features)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      travelPackage.name,
      travelPackage.category,
      travelPackage.badge,
      travelPackage.image,
      travelPackage.duration,
      travelPackage.price,
      travelPackage.features,
    ]
  );
}

await pool.end();
console.log('Packages added to the database.');