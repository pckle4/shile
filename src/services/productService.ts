// Define Product type to be used throughout the application
export interface Product {
  id: string;
  title: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory: string;
  rating: {
    rate: number;
    count: number;
  };
  isBestSeller?: boolean;
  isPrime?: boolean;
  inStock?: boolean;
  deliveryDate?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

// Categories and subcategories structure
interface Subcategory {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

// Define categories data
const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    subcategories: [
      { id: 'smartphones', name: 'Smartphones' },
      { id: 'laptops', name: 'Laptops' },
      { id: 'headphones', name: 'Headphones' }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    subcategories: [
      { id: 'menswear', name: 'Menswear' },
      { id: 'womenswear', name: 'Womenswear' },
      { id: 'accessories', name: 'Accessories' }
    ]
  },
  {
    id: 'home',
    name: 'Home',
    subcategories: [
      { id: 'furniture', name: 'Furniture' },
      { id: 'decor', name: 'Decor' },
      { id: 'kitchenware', name: 'Kitchenware' }
    ]
  },
  {
    id: 'books',
    name: 'Books',
    subcategories: [
      { id: 'fiction', name: 'Fiction' },
      { id: 'nonfiction', name: 'Non-Fiction' },
      { id: 'mystery', name: 'Mystery' }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty',
    subcategories: [
      { id: 'skincare', name: 'Skincare' },
      { id: 'makeup', name: 'Makeup' },
      { id: 'haircare', name: 'Haircare' }
    ]
  }
];

export const getProducts = async (categoryId: string, subcategoryId?: string) => {
  const products = localStorage.getItem('products');
  let productList = products ? JSON.parse(products) : [];

  if (productList.length === 0) {
    productList = generateRandomProducts(20);
    localStorage.setItem('products', JSON.stringify(productList));
  }

  let filteredProducts = productList.filter(product => product.category === categoryId);
  if (subcategoryId) {
    filteredProducts = filteredProducts.filter(product => product.subcategory === subcategoryId);
  }

  return filteredProducts;
};

// Return all products (non-async version for component usage)
export const getAllProducts = () => {
  const products = localStorage.getItem('products');
  let productList = products ? JSON.parse(products) : [];

  if (productList.length === 0) {
    productList = generateRandomProducts(20);
    localStorage.setItem('products', JSON.stringify(productList));
  }

  return productList;
};

// Get product by ID (renamed from getProduct to getProductById for clarity)
export const getProductById = async (id: string) => {
  const products = localStorage.getItem('products');
  if (!products) {
    return null;
  }

  const productList = JSON.parse(products);
  return productList.find((product: Product) => product.id === id) || null;
};

// Added for backward compatibility
export const getProduct = getProductById;

export const getCartItems = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

// Add a custom event to notify components when cart is updated
export const dispatchCartUpdatedEvent = () => {
  window.dispatchEvent(new Event('cartUpdated'));
};

// Make sure to call this whenever cart items change
export const addToCart = (product) => {
  const cart = getCartItems();
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Dispatch event after cart is updated
  dispatchCartUpdatedEvent();
};

export const removeFromCart = (productId) => {
  let cart = getCartItems();
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Dispatch event after cart is updated
  dispatchCartUpdatedEvent();
};

export const updateCartItemQuantity = (productId, quantity) => {
  let cart = getCartItems();
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Dispatch event after cart is updated
  dispatchCartUpdatedEvent();
};

// New function to get products by category
export const getProductsByCategory = (categoryId: string, subcategoryId?: string) => {
  const allProducts = getAllProducts();
  
  let filtered = allProducts.filter((product: Product) => product.category === categoryId);
  
  if (subcategoryId) {
    filtered = filtered.filter((product: Product) => product.subcategory === subcategoryId);
  }
  
  return filtered;
};

// New function to get featured products
export const getFeaturedProducts = () => {
  const allProducts = getAllProducts();
  // Return top 8 products with highest rating
  return [...allProducts]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 8);
};

// Expose categories getter
export const getCategories = () => {
  return categories;
};

const generateRandomProducts = (count: number) => {
  const categories = ['electronics', 'fashion', 'home', 'books', 'beauty'];
  const subcategories = {
    electronics: ['smartphones', 'laptops', 'headphones'],
    fashion: ['menswear', 'womenswear', 'accessories'],
    home: ['furniture', 'decor', 'kitchenware'],
    books: ['fiction', 'nonfiction', 'mystery'],
    beauty: ['skincare', 'makeup', 'haircare'],
  };

  const products = [];
  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const subcategory = subcategories[category][Math.floor(Math.random() * subcategories[category].length)];
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const isBestSeller = Math.random() > 0.8;
    const isPrime = Math.random() > 0.7;
    const originalPrice = Math.random() > 0.6 ? Math.floor(Math.random() * 100) + 40 : undefined;
    const price = originalPrice ? originalPrice * (Math.random() * 0.3 + 0.6) : Math.floor(Math.random() * 100) + 20;
    
    // Image selection based on category for better reliability
    let imageUrl;
    switch (category) {
      case 'electronics':
        imageUrl = 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop';
        break;
      case 'fashion':
        imageUrl = 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop';
        break;
      case 'home':
        imageUrl = 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop';
        break;
      case 'books':
        imageUrl = 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop';
        break;
      case 'beauty':
        imageUrl = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop';
        break;
      default:
        imageUrl = 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=400&h=400&fit=crop';
    }
    
    const product: Product = {
      id: id,
      name: `Random Product ${i + 1}`,
      title: `Random Product ${i + 1}`,
      description: `A random product in the ${category} category.`,
      price: Math.floor(price),
      originalPrice: originalPrice ? Math.floor(originalPrice) : undefined,
      image: imageUrl,
      category: category,
      subcategory: subcategory,
      rating: {
        rate: Math.random() * 4 + 1,
        count: Math.floor(Math.random() * 500) + 5
      },
      isBestSeller,
      isPrime,
      inStock: Math.random() > 0.1,
      deliveryDate: `Delivery by ${new Date(Date.now() + Math.floor(Math.random() * 10) * 86400000).toLocaleDateString()}`,
      features: [
        `Feature 1 for ${category} product`,
        `Feature 2 related to ${subcategory}`,
        `Feature 3 with some specifications`,
      ]
    };
    
    products.push(product);
  }
  return products;
};
