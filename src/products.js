// src/products.js
import product1 from "./assets/products/NothingPh2.png";
import product2 from "./assets/products/MotorolaRazr40Ultra.png";
import product3 from "./assets/products/GooglePixel8Pro.png";
import product4 from "./assets/products/OppoFindX6Pro.png";
import product5 from "./assets/products/HuaweiMateXT.png";
import product6 from "./assets/products/iphone15pro.png";
import product7 from "./assets/products/SamsungS23.png";
import product8 from "./assets/products/Oneplus11.png";
import product9 from "./assets/products/Mi13Pro.png";
// Import new product images here

// Current date for "new" product tag
const currentDate = new Date();
const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

export const PRODUCTS = [
  {
    id: 1,
    productName: "iPhone 15 Pro",
    price: 999.99,
    productImage: product6,
    description: "Apple's latest flagship with A17 Pro chip and titanium design.",
    dateAdded: new Date(2023, 11, 15), // December 15, 2023
    isNew: true,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A17 Pro",
      camera: "48MP main camera",
      battery: "All-day battery life",
      storage: "128GB, 256GB, 512GB, 1TB"
    }
  },
  {
    id: 2,
    productName: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    productImage: product7,
    description: "Ultimate Android experience with S Pen and 200MP camera.",
    dateAdded: new Date(2023, 10, 20), // November 20, 2023
    isNew: true,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP main camera",
      battery: "5000mAh",
      storage: "256GB, 512GB, 1TB"
    }
  },
  {
    id: 3,
    productName: "Google Pixel 8 Pro",
    price: 899.99,
    productImage: product3,
    description: "Google's AI-powered flagship with incredible camera capabilities.",
    dateAdded: new Date(2023, 9, 12), // October 12, 2023
    isNew: false,
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      camera: "50MP main camera with AI enhancements",
      battery: "5050mAh",
      storage: "128GB, 256GB, 512GB"
    }
  },
  {
    id: 4,
    productName: "OnePlus 11",
    price: 699.99,
    productImage: product8,
    description: "Flagship killer with Hasselblad camera system and fast charging.",
    dateAdded: new Date(2023, 11, 28), // December 28, 2023
    isNew: true,
    specs: {
      display: "6.7-inch AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Hasselblad camera",
      battery: "5000mAh with 100W charging",
      storage: "128GB, 256GB"
    }
  },
  {
    id: 5,
    productName: "Xiaomi 13 Pro",
    price: 899.99,
    productImage: product9,
    description: "Premium smartphone with Leica optics and powerful performance.",
    dateAdded: new Date(2023, 8, 5), // September 5, 2023
    isNew: false,
    specs: {
      display: "6.73-inch AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Leica camera",
      battery: "4820mAh with 120W charging",
      storage: "256GB, 512GB"
    }
  },
  {
    id: 6,
    productName: "Nothing Phone (2)",
    price: 599.99,
    productImage: product1,
    description: "Unique transparent design with Glyph interface and clean Android experience.",
    dateAdded: new Date(2023, 11, 30), // December 30, 2023
    isNew: true,
    specs: {
      display: "6.7-inch OLED 120Hz",
      processor: "Snapdragon 8+ Gen 1",
      camera: "50MP dual camera",
      battery: "4700mAh with 45W charging",
      storage: "128GB, 256GB"
    }
  },
  {
    id: 7,
    productName: "Motorola Razr 40 Ultra",
    price: 999.99,
    productImage: product2,
    description: "Modern flip phone with large cover display and premium features.",
    dateAdded: new Date(2023, 11, 10), // December 10, 2023
    isNew: true,
    specs: {
      display: "6.9-inch foldable OLED + 3.6-inch cover display",
      processor: "Snapdragon 8+ Gen 1",
      camera: "12MP main camera",
      battery: "3800mAh with 30W charging",
      storage: "256GB, 512GB"
    }
  },
  {
    id: 8,
    productName: "Oppo Find X6 Pro",
    price: 1099.99,
    productImage: product4,
    description: "Photography powerhouse with Hasselblad tuning and premium build.",
    dateAdded: new Date(2023, 7, 15), // August 15, 2023
    isNew: false,
    specs: {
      display: "6.82-inch AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP triple camera system",
      battery: "5000mAh with 100W charging",
      storage: "256GB, 512GB"
    }
  },
    {
    id: 9, // Keep the existing ID
    productName: "Huawei Mate XT Ultimate Design", // Amended to the official product name
    price: 2800.00, // Approximate starting price based on search results (USD equivalent)
    productImage: product5, // Keep the existing placeholder or update with a relevant image if available
    description: "The world's first tri-fold phone featuring a large, versatile display and premium Huawei technology.", // Amended description based on product highlights
    dateAdded: new Date(2024, 8, 20), // Amended to the China release date (September 20, 2024)
    isNew: true, // Keep as true, as it's a recent release
    specs: {
      display: "Unfolded: 10.2-inch tri-foldable LTPO OLED (2232 x 3184) | Folded (Dual): 7.9-inch (2232 x 2048) | Folded (Single): 6.4-inch (2232 x 1008)", // Amended display specs
      processor: "Kirin 9010", // Amended processor
      camera: "Rear: 50MP (Wide) + 12MP (Ultrawide) + 12MP (Periscope Telephoto 5.5x Optical Zoom) | Front: 8MP (Wide)", // Amended camera specs
      battery: "5600mAh with 66W wired and 50W wireless charging", // Amended battery specs
      storage: "16GB RAM; 256GB, 512GB, or 1TB ROM", // Amended storage and added RAM
    }
  }
];

// Function to check if a product is new (added within the last week)
export const isNewProduct = (dateAdded) => {
  return dateAdded > oneWeekAgo;
};