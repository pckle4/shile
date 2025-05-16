export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  features?: string[];
  specifications?: Record<string, string>;
  inStock: boolean;
  deliveryDate?: string;
  isFulfilled?: boolean;
  isBestSeller?: boolean;
  isPrime?: boolean;
}

export interface Category {
  id: string;
  name: string;
  subcategories: { id: string; name: string }[];
}

const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    subcategories: [
      { id: "mobiles", name: "Mobiles & Accessories" },
      { id: "laptops", name: "Laptops & Accessories" },
      { id: "cameras", name: "Cameras" },
      { id: "audio", name: "Audio & Headphones" },
      { id: "tv", name: "Televisions" }
    ]
  },
  {
    id: "fashion",
    name: "Fashion",
    subcategories: [
      { id: "men", name: "Men's Clothing" },
      { id: "women", name: "Women's Clothing" },
      { id: "kids", name: "Kids' Clothing" },
      { id: "shoes", name: "Footwear" },
      { id: "watches", name: "Watches" }
    ]
  },
  {
    id: "home",
    name: "Home & Kitchen",
    subcategories: [
      { id: "furniture", name: "Furniture" },
      { id: "kitchen", name: "Kitchen & Dining" },
      { id: "appliances", name: "Home Appliances" },
      { id: "decor", name: "Home Decor" },
      { id: "garden", name: "Garden & Outdoors" }
    ]
  },
  {
    id: "books",
    name: "Books",
    subcategories: [
      { id: "fiction", name: "Fiction" },
      { id: "nonfiction", name: "Non-Fiction" },
      { id: "educational", name: "Educational" },
      { id: "comics", name: "Comics & Manga" },
      { id: "children", name: "Children's Books" }
    ]
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    subcategories: [
      { id: "makeup", name: "Makeup" },
      { id: "skincare", name: "Skincare" },
      { id: "haircare", name: "Haircare" },
      { id: "fragrance", name: "Fragrance" },
      { id: "personalcare", name: "Personal Care" }
    ]
  }
];

// Mock product data that resembles Amazon's product structure
const products: Product[] = [
  {
    id: "1",
    title: "Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)",
    price: 89999,
    originalPrice: 109999,
    description: "The first Galaxy S with embedded S Pen. Write comfortably like pen on paper. The S Pen fits right into the phone for fast access. Take quick notes or sketch your ideas with precision.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.7,
      count: 1456
    },
    features: [
      "12GB RAM | 256GB ROM",
      "17.32 cm (6.8 inch) Quad HD+ Display",
      "108MP + 12MP + 10MP + 10MP | 40MP Front Camera",
      "5000 mAh Battery"
    ],
    specifications: {
      "Brand": "Samsung",
      "Model": "Galaxy S22 Ultra",
      "Network Service Provider": "Unlocked for All Carriers",
      "OS": "Android 12.0",
      "RAM": "12 GB",
      "Product Dimensions": "0.9 x 7.8 x 16.3 cm; 227 Grams"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 8 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "2",
    title: "Apple iPhone 14 Pro Max (256GB) - Deep Purple",
    price: 139900,
    originalPrice: 149900,
    description: "48MP Main camera for up to 4x greater resolution. Dynamic Island, a magical new way to interact with iPhone. A16 Bionic, the ultimate smartphone chip. All-day battery life and up to 29 hours of video playback.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.8,
      count: 2584
    },
    features: [
      "15.54 cm (6.7-inch) Super Retina XDR display",
      "48MP Main | 12MP Ultra Wide | 12MP Telephoto",
      "A16 Bionic chip, 6-core CPU",
      "Up to 29 hours video playback"
    ],
    specifications: {
      "Brand": "Apple",
      "Model": "iPhone 14 Pro Max",
      "Network Service Provider": "Unlocked for All Carriers",
      "OS": "iOS 16",
      "RAM": "6 GB",
      "Product Dimensions": "7.9 x 1.0 x 16.1 cm; 240 Grams"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 9 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones",
    price: 29990,
    originalPrice: 34990,
    description: "Industry-leading noise cancellation with two processors and 8 microphones. Crystal clear hands-free calling with 4 beamforming microphones. Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback).",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.6,
      count: 987
    },
    features: [
      "Industry-leading noise cancellation",
      "Magnificent sound with Auto NC Optimizer",
      "Crystal clear hands-free calling",
      "Up to 30-hour battery life"
    ],
    specifications: {
      "Brand": "Sony",
      "Model": "WH-1000XM5",
      "Form Factor": "Over Ear",
      "Connectivity Technology": "Bluetooth 5.2",
      "Battery Life": "Up to 30 hours",
      "Weight": "250 Grams"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 10 PM - FREE Delivery",
    isFulfilled: true,
    isPrime: true
  },
  {
    id: "4",
    title: "LG C2 42-inch 4K Smart OLED TV 2022 Model",
    price: 89990,
    originalPrice: 119990,
    description: "Self-lit OLED pixels produce perfect black and infinite contrast. α9 Gen5 AI Processor 4K with AI Picture Pro & AI 4K Upscaling. Dolby Vision IQ & Dolby Atmos with 40W 2.2Ch speakers with additional up-firing speakers.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.5,
      count: 653
    },
    features: [
      "Self-lit OLED Pixels with Perfect Black",
      "α9 Gen5 AI Processor 4K",
      "Dolby Vision IQ & Dolby Atmos",
      "4 HDMI 2.1, eARC, ALLM, VRR"
    ],
    specifications: {
      "Brand": "LG",
      "Model": "OLED42C2PSA",
      "Screen Size": "42 Inches",
      "Resolution": "4K Ultra HD (3840x2160)",
      "Refresh Rate": "120 Hz",
      "Connectivity": "Wi-Fi, Bluetooth, HDMI, USB"
    },
    inStock: true,
    deliveryDate: "Get it by Saturday, 8 PM - FREE Delivery",
    isFulfilled: true,
    isPrime: true
  },
  {
    id: "5",
    title: "HP Pavilion 15 12th Gen Intel Core i7 Laptop",
    price: 72990,
    originalPrice: 89990,
    description: "12th Generation Intel® Core™ i7-1255U (up to 4.7 GHz, 12 MB L3 cache, 10 cores, 12 threads). 15.6-inch FHD display with 16 GB RAM and 512 GB SSD. Intel® Iris® Xᵉ Graphics. Thin and light design for productivity on the go.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.3,
      count: 567
    },
    features: [
      "12th Gen Intel Core i7-1255U processor",
      "15.6-inch FHD IPS display",
      "16 GB DDR4 RAM, 512 GB SSD",
      "Backlit keyboard with numeric keypad"
    ],
    specifications: {
      "Brand": "HP",
      "Model": "Pavilion 15-eg2xxx",
      "CPU": "12th Gen Intel Core i7-1255U",
      "RAM": "16 GB DDR4",
      "Storage": "512 GB PCIe NVMe SSD",
      "Operating System": "Windows 11 Home",
      "Battery Life": "Up to 8 hours"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 9 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "6",
    title: "Fossil Men's Grant Stainless Steel Chronograph Quartz Watch",
    price: 9995,
    originalPrice: 13995,
    description: "Elegant chronograph watch with stainless steel case and leather strap. 44mm case size with mineral crystal dial window. Water resistant to 50m - suitable for short periods of swimming and showering.",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.5,
      count: 892
    },
    features: [
      "44mm case diameter",
      "Quartz movement with chronograph display",
      "Genuine leather strap",
      "Water resistant to 50m"
    ],
    specifications: {
      "Brand": "Fossil",
      "Model": "FS5268",
      "Department": "Men",
      "Case Diameter": "44 millimeters",
      "Band Material": "Leather",
      "Band Width": "22 millimeters",
      "Water Resistance": "50 meters"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 8 PM - FREE Delivery",
    isFulfilled: true,
    isPrime: true
  },
  {
    id: "7",
    title: "Allen Solly Men's Regular Fit Shirt",
    price: 1399,
    originalPrice: 2299,
    description: "Regular fit formal shirt with button-down collar. Made with 100% cotton for comfort and breathability. Machine washable and easy-iron fabric.",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.2,
      count: 1245
    },
    features: [
      "100% Cotton",
      "Button-down collar",
      "Regular fit",
      "Machine washable"
    ],
    specifications: {
      "Brand": "Allen Solly",
      "Model": "AMSH0127K",
      "Fit Type": "Regular Fit",
      "Material": "100% Cotton",
      "Pattern": "Solid",
      "Sleeve Type": "Full Sleeve",
      "Collar Style": "Button Down"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 9 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "8",
    title: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
    price: 299,
    originalPrice: 399,
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. This book explores the strange ways people think about money and teaches you how to make better sense of one of life's most important matters.",
    category: "books",
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.6,
      count: 15675
    },
    features: [
      "Author: Morgan Housel",
      "Paperback: 256 pages",
      "Publisher: Harriman House",
      "Language: English"
    ],
    specifications: {
      "Author": "Morgan Housel",
      "Publisher": "Harriman House",
      "Language": "English",
      "Paperback": "256 pages",
      "ISBN-10": "0857197681",
      "ISBN-13": "978-0857197689",
      "Item Weight": "220 g"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 10 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "9",
    title: "Bose QuietComfort Earbuds II - True Wireless Noise Cancelling In-Ear Headphones",
    price: 24900,
    originalPrice: 29900,
    description: "The world's best noise cancellation and deep, immersive sound in a truly wireless earbud. CustomTune technology automatically personalizes the audio and noise cancellation to fit your ears perfectly.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.7,
      count: 1352
    },
    features: [
      "World-class noise cancellation",
      "CustomTune sound technology",
      "Up to 6 hours battery life",
      "Bluetooth 5.3 connectivity"
    ],
    specifications: {
      "Brand": "Bose",
      "Model": "QuietComfort Earbuds II",
      "Color": "Triple Black",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "6 hours (24 hours with case)",
      "Weight": "6.24g per earbud"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 9 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "10",
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 7995,
    originalPrice: 9995,
    description: "7-in-1 functionality: Pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. 13 customizable Smart Programs for pressure cooking ribs, soups, beans, rice, poultry, yogurt, desserts and more.",
    category: "home",
    image: "https://images.unsplash.com/photo-1585577009823-3ec04c66e3d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.7,
      count: 32456
    },
    features: [
      "7-in-1 appliance functionality",
      "13 one-touch Smart Programs",
      "10+ built-in safety features",
      "Easy-seal lid automatically seals"
    ],
    specifications: {
      "Brand": "Instant Pot",
      "Model": "Duo 60",
      "Capacity": "6 Quarts",
      "Power": "1000 watts",
      "Material": "Stainless Steel",
      "Dimensions": "13.4 × 12.2 × 12.5 inches"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 9 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: "11",
    title: "ASUS ROG Strix G17 (2023) Gaming Laptop",
    price: 149990,
    originalPrice: 169990,
    description: "Latest AMD Ryzen 9 7945HX Processor with NVIDIA GeForce RTX 4080 Graphics. 17.3-inch QHD 240Hz display with 3ms response time. MUX Switch + NVIDIA Advanced Optimus for maximum gaming performance.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.8,
      count: 325
    },
    features: [
      "AMD Ryzen 9 7945HX Processor",
      "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "32GB DDR5 RAM, 1TB PCIe 4.0 SSD",
      "ROG Intelligent Cooling system"
    ],
    specifications: {
      "Brand": "ASUS",
      "Model": "ROG Strix G17 G713PV",
      "Processor": "AMD Ryzen 9 7945HX",
      "Graphics": "NVIDIA GeForce RTX 4080 16GB",
      "RAM": "32GB DDR5-4800MHz",
      "Storage": "1TB PCIe 4.0 NVMe SSD",
      "Display": "17.3-inch QHD (2560x1440) 240Hz"
    },
    inStock: true,
    deliveryDate: "Get it by Monday, 10 AM - FREE Delivery",
    isFulfilled: true,
    isPrime: true
  },
  {
    id: "12",
    title: "Nike Air Zoom Pegasus 39 Men's Running Shoes",
    price: 8995,
    originalPrice: 10995,
    description: "The Nike Air Zoom Pegasus 39 offers a supportive sensation to help keep your feet contained, while responsive foam gives you an extra spring in your step. The result is a shoe designed to help you keep up the pace, mile after mile.",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    rating: {
      rate: 4.4,
      count: 876
    },
    features: [
      "Zoom Air units provide responsive cushioning",
      "Engineered mesh upper provides breathability",
      "Midfoot webbing system for a personalized fit",
      "Waffle outsole for multi-surface traction"
    ],
    specifications: {
      "Brand": "Nike",
      "Model": "Air Zoom Pegasus 39",
      "Department": "Men",
      "Sole Material": "Rubber",
      "Closure": "Lace-Up",
      "Style": "Running Shoes"
    },
    inStock: true,
    deliveryDate: "Get it by Tomorrow, 9 PM - FREE Delivery",
    isFulfilled: true,
    isBestSeller: false,
    isPrime: true
  }
];

// Get featured products (usually best sellers or promoted items)
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isBestSeller || Math.random() > 0.5).slice(0, 5);
};

// Get all categories
export const getCategories = (): Category[] => {
  return categories;
};

// Get all products
export const getAllProducts = (): Product[] => {
  return products;
};

// Get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

// Search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Add this new function for cart items
export const getCartItems = () => {
  // In a real app, this would come from a state management solution or localStorage
  // For now, we'll return a mock cart with 3 items
  return [
    { id: 1, name: "Smartphone XS", price: 899, quantity: 1 },
    { id: 5, name: "Wireless Headphones", price: 199, quantity: 1 },
    { id: 8, name: "Smart Watch Pro", price: 299, quantity: 1 }
  ];
};
