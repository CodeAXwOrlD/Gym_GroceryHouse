const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: '.env.local' });

const Category = require('./src/model/Category').default;
const Product = require('./src/model/Product').default;

const MONGODB_URI = process.env.DB_URI;

const categories = [
  {
    categoryName: 'Fruits',
    categoryDescription: 'Fresh and organic fruits',
    categoryImage: '/fruits.jpg',
    categorySlug: 'fruits',
  },
  {
    categoryName: 'Vegetables',
    categoryDescription: 'Green and healthy vegetables',
    categoryImage: '/vegetables.jpg',
    categorySlug: 'vegetables',
  },
];

const products = [
  {
    productName: 'Apple',
    productDescription: 'Red delicious apples',
    productImage: '/apple.jpg',
    productSlug: 'apple',
    productPrice: 2.5,
    productQuantity: 100,
    productFeatured: true,
    productCategory: null, // to be set after category insert
  },
  {
    productName: 'Carrot',
    productDescription: 'Organic carrots',
    productImage: '/carrot.jpg',
    productSlug: 'carrot',
    productPrice: 1.2,
    productQuantity: 200,
    productFeatured: false,
    productCategory: null, // to be set after category insert
  },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  await Category.deleteMany({});
  await Product.deleteMany({});

  const insertedCategories = await Category.insertMany(categories);
  console.log('Inserted categories:', insertedCategories);

  products[0].productCategory = insertedCategories[0]._id;
  products[1].productCategory = insertedCategories[1]._id;

  const insertedProducts = await Product.insertMany(products);
  console.log('Inserted products:', insertedProducts);

  await mongoose.disconnect();
  console.log('Database disconnected');
}

seed().catch((err) => {
  console.error('Seeding error:', err);
  mongoose.disconnect();
});
