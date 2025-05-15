
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/services/productService';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;
    
  return (
    <Link to={`/product/${product.id}`} className="product-card block">
      <div className="relative p-4">
        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <Badge className="absolute top-2 left-2 z-10 bg-amazon-orange font-bold">
            Best Seller
          </Badge>
        )}
        
        {/* Prime Badge */}
        {product.isPrime && (
          <span className="absolute top-2 right-2 z-10 bg-blue-600 text-white text-xs px-1 py-0.5 rounded">
            Prime
          </span>
        )}
        
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden mb-3">
          <img 
            src={product.image} 
            alt={product.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform"
          />
        </div>
        
        {/* Product Details */}
        <div className="text-left">
          {/* Title */}
          <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1">
            {product.title}
          </h3>
          
          {/* Ratings */}
          <div className="flex items-center mb-1">
            <div className="flex text-amazon-orange">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14}
                  fill={i < Math.floor(product.rating.rate) ? "currentColor" : "none"}
                  className={i < Math.floor(product.rating.rate) ? "text-amazon-orange" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.rating.count})
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-baseline">
            <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm text-amazon-green ml-2">
                  {discountPercentage}% off
                </span>
              </>
            )}
          </div>
          
          {/* Delivery */}
          {product.deliveryDate && (
            <p className="text-xs text-gray-600 mt-1">
              {product.deliveryDate}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
