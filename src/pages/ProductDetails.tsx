
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, ShoppingCart, Heart, TruckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/services/productService';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/" className="text-amazon-green">
              Return to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart`,
    });
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to Checkout",
      description: "This feature is not implemented yet.",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-amazon-green">Home</Link>
          {' > '}
          <Link to={`/category/${product.category}`} className="hover:text-amazon-green">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          {' > '}
          <span className="text-gray-700">{product.title.substring(0, 20)}...</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Image */}
          <div className="overflow-hidden bg-white p-4 rounded-lg">
            <img 
              src={product.image} 
              alt={product.title}
              className="object-contain w-full h-80 md:h-96"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex text-amazon-orange">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16}
                    fill={i < Math.floor(product.rating.rate) ? "currentColor" : "none"}
                    className={i < Math.floor(product.rating.rate) ? "text-amazon-orange" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-blue-600 ml-2">
                {product.rating.count} ratings
              </span>
            </div>
            
            {product.isBestSeller && (
              <div className="inline-block bg-amazon-orange text-white text-sm px-2 py-1 rounded mb-4">
                #1 Best Seller
              </div>
            )}
            
            {/* Price */}
            <div className="border-t border-b py-4 mb-4">
              <div className="flex items-baseline">
                <span className="text-sm text-gray-500 mr-1">₹</span>
                <span className="text-3xl font-bold">{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-amazon-green ml-2">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </span>
                  </>
                )}
              </div>
              
              {product.isPrime && (
                <div className="mt-2 flex items-center">
                  <span className="bg-blue-600 text-white text-xs px-1 py-0.5 rounded mr-2">
                    Prime
                  </span>
                  <span className="text-sm">
                    FREE Delivery
                  </span>
                </div>
              )}
            </div>
            
            {/* Features */}
            {product.features && (
              <div className="mb-4">
                <h3 className="font-bold mb-2">About this item:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Buy Box */}
          <div className="border rounded-lg p-4 bg-white h-fit">
            <div className="text-lg font-bold mb-2">₹{product.price.toLocaleString()}</div>
            
            {product.isPrime && (
              <div className="mb-4 flex items-center">
                <span className="bg-blue-600 text-white text-xs px-1 py-0.5 rounded mr-2">
                  Prime
                </span>
                <span className="text-sm">
                  FREE Delivery
                </span>
              </div>
            )}
            
            {product.deliveryDate && (
              <div className="text-sm mb-4">
                {product.deliveryDate}
              </div>
            )}
            
            <div className="text-lg text-amazon-green mb-2">
              {product.inStock ? 'In Stock' : 'Currently unavailable'}
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="block text-sm mb-1">Quantity:</label>
              <select 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border rounded p-1 w-16"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <Button 
                className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                className="w-full bg-amazon-orange hover:brightness-105 text-white"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              
              <div className="pt-2 border-t mt-2">
                <div className="flex text-sm">
                  <TruckIcon className="h-4 w-4 mr-2 text-gray-500" />
                  <div>
                    <Link to="#" className="text-blue-600">
                      Deliver to India
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <div className="text-gray-700">{product.description}</div>
        </div>
        
        {/* Product Specifications */}
        {product.specifications && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Product Specifications</h2>
            <table className="w-full border-collapse">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-2 pr-4 font-medium w-1/4">{key}</td>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
