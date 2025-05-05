// src/products.js
import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
// Import new product images here

export const PRODUCTS = [
  {
    id: 1,
    productName: "Oppo A35",
    price: 991.1,
    productImage: product1,
    description: "A great phone with a good camera.", // Add descriptions here if needed
  },
  {
    id: 2,
    productName: "Xiaomi Redmi Note 5 Pro",
    price: 992.2,
    productImage: product2,
    description: "Powerful performance and long battery life.",
  },
  {
    id: 3,
    productName: "Motorola", // This might be a placeholder, update with specific model
    price: 993.3,
    productImage: product3,
    description: "Unique design with foldable screen.",
  },
  {
    id: 4,
    productName: "Pixel 6a",
    price: 994.4,
    productImage: product4,
    description: "Excellent camera and Google's AI features.",
  },
  {
    id: 5,
    productName: "Motorola X40",
    price: 995.5,
    productImage: product5,
    description: "High-performance phone with fast charging.",
  },
  // Add new product objects here
  // {
  //   id: 6,
  //   productName: "New Awesome Phone",
  //   price: 1200.0,
  //   productImage: yourNewProductImageImport, // Reference the imported image
  //   description: "Description of your new phone."
  // }
];
