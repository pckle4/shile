
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/services/productService';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    
    setTimeout(() => {
      setIsAdding(false);
      toast({
        title: "Added to cart",
        description: `${product.title} has been added to your cart`,
      });
    }, 600);
  };
  
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="product-card relative p-4 h-full flex flex-col transition-all duration-300 group-hover:scale-[1.02]">
        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <Badge className="absolute top-2 left-2 z-10 bg-shine-accent text-white font-medium">
            Best Seller
          </Badge>
        )}
        
        {/* Prime Badge */}
        {product.isPrime && (
          <span className="absolute top-2 right-2 z-10 bg-shine-blue text-white text-xs px-2 py-0.5 rounded-full">
            Premium
          </span>
        )}
        
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden mb-4 bg-white/50 rounded-lg">
          <img 
            src={product.image} 
            alt={product.title}
            className="object-contain w-full h-full p-2 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Product Details */}
        <div className="text-left flex-grow">
          {/* Title */}
          <h3 className="text-sm font-medium line-clamp-2 h-10 mb-2">
            {product.title}
          </h3>
          
          {/* Ratings */}
          <div className="flex items-center mb-1">
            <div className="flex text-shine-accent">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14}
                  fill={i < Math.floor(product.rating.rate) ? "currentColor" : "none"}
                  className={i < Math.floor(product.rating.rate) ? "text-shine-accent" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating.count})
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-baseline mb-3">
            <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-xs bg-shine-accent/10 text-shine-accent rounded-full px-1.5 py-0.5 ml-2">
                  {discountPercentage}% off
                </span>
              </>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <div className="mt-auto">
            <Button 
              className="w-full bg-shine-purple hover:bg-shine-accent text-white font-medium"
              onClick={handleAddToCart}
            >
              <ShoppingCart className={`h-4 w-4 mr-2 ${isAdding ? 'animate-cart-bounce' : ''}`} />
              Add to Cart
            </Button>
          </div>
          
          {/* Delivery */}
          {product.deliveryDate && (
            <p className="text-xs text-muted-foreground mt-2">
              {product.deliveryDate}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
