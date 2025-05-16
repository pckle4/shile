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

export const getAllProducts = async () => {
  const products = localStorage.getItem('products');
  let productList = products ? JSON.parse(products) : [];

  if (productList.length === 0) {
    productList = generateRandomProducts(20);
    localStorage.setItem('products', JSON.stringify(productList));
  }

  return productList;
};

export const getProduct = async (id: string) => {
  const products = localStorage.getItem('products');
  if (!products) {
    return null;
  }

  const productList = JSON.parse(products);
  return productList.find((product: any) => product.id === id) || null;
};

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
    products.push({
      id: id,
      name: `Random Product ${i + 1}`,
      description: `A random product in the ${category} category.`,
      price: Math.floor(Math.random() * 100) + 20,
      image: `https://source.unsplash.com/200x200/?${category}`,
      category: category,
      subcategory: subcategory,
    });
  }
  return products;
};
