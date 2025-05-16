import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, ShoppingCart, Heart, TruckIcon, Info, ImageOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/services/productService';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import TechInfo from '@/components/TechInfo';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showTechInfo, setShowTechInfo] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchProduct = async () => {
      if (id) {
        const result = await getProductById(id);
        setProduct(result);
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/" className="text-shine-purple">
              Return to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    setIsAdding(true);
    
    setTimeout(() => {
      setIsAdding(false);
      toast({
        title: "Added to Cart",
        description: `${product.title} has been added to your cart`,
      });
    }, 600);
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to Checkout",
      description: "This feature is not implemented yet.",
    });
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-shine-purple">Home</Link>
          {' > '}
          <Link to={`/category/${product.category}`} className="hover:text-shine-purple">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          {' > '}
          <span className="text-foreground">{product.title.substring(0, 20)}...</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product Image */}
          <div className="glass p-8 rounded-2xl overflow-hidden">
            <div className="relative w-full h-80 md:h-96">
              {!imageLoaded && !imageError && <Skeleton className="w-full h-full absolute" />}
              
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <ImageOff className="h-16 w-16 text-gray-400" />
                </div>
              ) : (
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={`object-contain w-full h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )}
            </div>
            <div className="flex justify-end mt-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs flex items-center"
                onClick={() => setShowTechInfo(!showTechInfo)}
              >
                <Info className="h-3 w-3 mr-1" />
                {showTechInfo ? 'Hide' : 'Show'} Tech Info
              </Button>
            </div>
            {showTechInfo && <TechInfo componentName="Product Image" />}
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex text-shine-accent">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16}
                    fill={i < Math.floor(product.rating.rate) ? "currentColor" : "none"}
                    className={i < Math.floor(product.rating.rate) ? "text-shine-accent" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-shine-purple ml-2">
                {product.rating.rate} ({product.rating.count} ratings)
              </span>
            </div>
            
            {product.isBestSeller && (
              <div className="inline-block bg-shine-accent text-white text-sm px-3 py-1 rounded-full mb-4">
                #1 Best Seller
              </div>
            )}
            
            {/* Price */}
            <div className="glass p-6 rounded-xl mb-6">
              <div className="flex items-baseline">
                <span className="text-sm mr-1">₹</span>
                <span className="text-4xl font-bold">{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-muted-foreground line-through ml-3">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm bg-shine-accent/10 text-shine-accent rounded-full px-2 py-0.5 ml-2">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </span>
                  </>
                )}
              </div>
              
              {product.isPrime && (
                <div className="mt-3 flex items-center">
                  <span className="bg-shine-blue text-white text-xs px-2 py-0.5 rounded-full mr-2">
                    Premium
                  </span>
                  <span className="text-sm">
                    FREE Express Delivery
                  </span>
                </div>
              )}
            </div>
            
            {/* Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="font-bold mb-2">About this item:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-shine-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Buy Box */}
          <div className="glass p-6 rounded-xl h-fit">
            <div className="text-xl font-bold mb-3">₹{product.price.toLocaleString()}</div>
            
            {product.isPrime && (
              <div className="mb-4 flex items-center">
                <span className="bg-shine-blue text-white text-xs px-2 py-0.5 rounded-full mr-2">
                  Premium
                </span>
                <span className="text-sm">
                  FREE Express Delivery
                </span>
              </div>
            )}
            
            {product.deliveryDate && (
              <div className="text-sm mb-4 font-medium">
                {product.deliveryDate}
              </div>
            )}
            
            <div className="text-lg font-medium text-shine-purple mb-4">
              {product.inStock ? 'In Stock' : 'Currently unavailable'}
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm mb-2">Quantity:</label>
              <select 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border rounded-lg p-2 w-20"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-shine-purple hover:bg-shine-accent text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className={`h-4 w-4 mr-2 ${isAdding ? 'animate-cart-bounce' : ''}`} />
                Add to Cart
              </Button>
              
              <Button 
                className="w-full shine-button animate-shine"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              
              <Button variant="outline" className="w-full mt-2">
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
              
              <div className="pt-4 border-t mt-2">
                <div className="flex text-sm">
                  <TruckIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <div>
                    <Link to="#" className="text-shine-purple hover:underline">
                      Deliver to India
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="glass p-6 rounded-xl mt-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="text-foreground">{String(product.description)}</div>
        </div>
        
        {/* Product Specifications */}
        {product.specifications && (
          <div className="glass p-6 rounded-xl mt-6">
            <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
            <table className="w-full border-collapse">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-3 pr-4 font-medium w-1/4">{key}</td>
                    <td className="py-3">{String(value)}</td>
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
