
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample cart item data structure
interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  // Sample initial cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)",
      price: 89999,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      quantity: 1
    },
    {
      id: "3",
      title: "Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones",
      price: 29990,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      quantity: 2
    }
  ]);
  
  const { toast } = useToast();
  
  // Calculate total price
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 499 : 0;
  const total = subtotal + shipping;
  
  // Update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    
    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  const handleCheckout = () => {
    toast({
      title: "Checkout Process",
      description: "This feature is not implemented yet.",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-grow">
              {/* Cart Items List */}
              <div className="bg-white rounded-lg border">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold">
                    Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)
                  </h2>
                </div>
                
                {/* Item List */}
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6 border-b flex flex-col md:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-grow">
                        <Link to={`/product/${item.id}`} className="font-medium hover:text-amazon-green">
                          {item.title}
                        </Link>
                        
                        <div className="text-lg font-bold mt-2">
                          ₹{item.price.toLocaleString()}
                        </div>
                        
                        <div className="text-sm text-amazon-green mt-1">
                          In Stock
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded-md">
                            <button 
                              className="px-2 py-1"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 border-x">
                              {item.quantity}
                            </span>
                            <button 
                              className="px-2 py-1"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Delete Button */}
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      
                      {/* Item Subtotal (Medium screens and larger) */}
                      <div className="hidden md:block text-right min-w-28">
                        <div className="font-bold">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                {/* Subtotal (Bottom) */}
                <div className="p-6 text-right">
                  <div className="text-lg">
                    Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items):
                    <span className="font-bold ml-2">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-2 border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Items ({cartItems.reduce((total, item) => total + item.quantity, 0)}):</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping & Handling:</span>
                    <span>₹{shipping.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg border text-center">
            <h2 className="text-2xl font-bold mb-4">Your Amazon Cart is empty</h2>
            <p className="mb-6">Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics, and more.</p>
            <Link to="/">
              <Button className="bg-amazon-yellow hover:bg-amazon-orange text-black">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
