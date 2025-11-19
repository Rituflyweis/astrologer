// Shared products data
export const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    description: 'This is a detailed description of Product 1. It has many features and benefits that make it a great choice for customers.',
    image: 'https://via.placeholder.com/400x300?text=Product+1',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 23,
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$39.99',
    description: 'This is a detailed description of Product 2. It offers excellent value and quality for the price.',
    image: 'https://via.placeholder.com/400x300?text=Product+2',
    category: 'Clothing',
    inStock: true,
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$49.99',
    description: 'This is a detailed description of Product 3. Premium quality and exceptional performance.',
    image: 'https://via.placeholder.com/400x300?text=Product+3',
    category: 'Home & Garden',
    inStock: false,
    rating: 4.2,
    reviews: 12,
  },
];

// Function to get product by ID
export function getProductById(id) {
  return products.find((product) => product.id === parseInt(id));
}

// Function to get all products
export function getAllProducts() {
  return products;
}




