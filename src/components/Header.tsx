
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, X, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MegaMenu from './MegaMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { getCartItems, getAllProducts } from '@/services/productService';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Get cart items count and update it
    const updateCartItems = () => {
      const items = getCartItems();
      setCartItems(items.length);
    };
    
    // Load all products for search
    const loadProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    
    loadProducts();
    updateCartItems();
    
    // Setup event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('cartUpdated', updateCartItems);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cartUpdated', updateCartItems);
    };
  }, []);
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(query.length > 0);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(false);
      navigate(`/category/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  const handleProductClick = (productId) => {
    setSearchQuery('');
    setShowResults(false);
    navigate(`/product/${productId}`);
  };
  
  const filteredProducts = searchQuery
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];
  
  return (
    <header className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${scrolled ? 'bg-shine-purple/90 py-2 shadow-md' : 'bg-gradient-to-r from-shine-purple/80 via-shine-blue/80 to-shine-purple/80 py-4'}`}>
      {/* Top Navigation Bar */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`text-2xl font-bold ${isHovered ? 'shine-text animate-pulse' : 'text-white'} transition-all duration-300`}>Shile</span>
          </Link>
          
          {/* Slogan - Only show on desktop and when not scrolled */}
          {!isMobile && !scrolled && (
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm text-center font-medium text-white">
              Shop in no time <span className="text-xs block">A Nowlite.com venture</span>
            </div>
          )}
          
          {/* Delivery Location */}
          <div className="hidden md:flex items-center mr-4">
            <MapPin className="h-5 w-5 mr-1 text-white animate-pulse" />
            <div className="text-sm">
              <div className="text-white/90">Deliver to</div>
              <div className="font-bold text-white">India</div>
            </div>
          </div>
          
          {/* Search */}
          <div className={`flex-1 max-w-md mx-4 relative ${isSearchFocused ? 'z-20' : ''}`}>
            <form onSubmit={handleSearchSubmit} className="flex">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="rounded-full pr-12 border-white/30 focus:border-white bg-white/20 placeholder:text-white/70 text-white"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
              />
              <Button 
                type="submit"
                className="absolute right-0 rounded-full bg-shine-accent text-white hover:bg-shine-accent/80 hover:scale-105 transition-all duration-300" 
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            {/* Search Results Dropdown */}
            {showResults && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-30 max-h-60 overflow-auto">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.image && (
                      <img src={product.image} alt={product.name} className="w-10 h-10 object-cover mr-2" />
                    )}
                    <div>
                      <div className="font-medium text-gray-800">{product.name}</div>
                      <div className="text-sm text-gray-500">${product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showResults && searchQuery && filteredProducts.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-30 p-3 text-center">
                No products found matching "{searchQuery}"
              </div>
            )}
          </div>
          
          {/* Tech Stack Link */}
          <Link to="/tech" className="hidden md:flex items-center text-sm mr-3 hover:text-shine-accent transition-colors text-white hover:scale-105">
            <Code className="h-4 w-4 mr-1" />
            <span>Tech Stack</span>
          </Link>
          
          {/* Account */}
          <div className="hidden md:block">
            <Link to="/account" className="text-sm text-white hover:text-shine-accent transition-all duration-300 hover:scale-105">
              <div className="text-white/80 text-xs">Hello, Sign in</div>
              <div className="font-medium">Account</div>
            </Link>
          </div>
          
          {/* Cart */}
          <Link 
            to="/cart" 
            className="flex items-center ml-4 text-white hover:text-shine-accent transition-colors relative group"
            onMouseEnter={() => toast({
              title: "Your Shopping Cart",
              description: cartItems > 0 ? `You have ${cartItems} items in your cart` : "Your cart is empty",
            })}
          >
            <div className="relative transition-transform group-hover:scale-110 duration-300">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 bg-shine-accent text-white group-hover:animate-pulse">{cartItems}</Badge>
            </div>
            <span className="hidden md:inline ml-1 font-medium">Cart</span>
          </Link>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              className="ml-2 text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>
      
      {/* Secondary Navigation (Categories) */}
      <div className={`container mx-auto transition-all duration-300 ${scrolled ? 'mt-0' : 'mt-2'}`}>
        <nav className="flex items-center px-4 overflow-x-auto scrollbar-hide">
          {!isMobile ? (
            <div className="flex space-x-1 w-full justify-center">
              <Button variant="ghost" className="text-sm flex items-center rounded-full text-white hover:bg-white/10">
                <Menu className="h-4 w-4 mr-1" />
                All
              </Button>
              <MegaMenu />
            </div>
          ) : (
            <div className="overflow-x-auto flex py-2">
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full text-white hover:bg-white/10">
                Today's Deals
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full text-white hover:bg-white/10">
                Best Sellers
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full text-white hover:bg-white/10">
                Electronics
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full text-white hover:bg-white/10">
                Fashion
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full text-white hover:bg-white/10">
                Books
              </Button>
            </div>
          )}
        </nav>
      </div>
      
      {/* Mobile Menu (Shown when menu button is clicked) */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-shine-purple h-full w-4/5 max-w-xs overflow-y-auto animate-fade-in">
            <div className="bg-shine-accent text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="text-lg font-bold">Hello, Sign In</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 border-b border-white/10">
              <h2 className="font-bold text-lg mb-2 text-white">Shop By Department</h2>
              <ul className="space-y-2 text-white/90">
                <li><Link to="/category/electronics" className="block py-1 hover:text-shine-accent transition-colors">Electronics</Link></li>
                <li><Link to="/category/fashion" className="block py-1 hover:text-shine-accent transition-colors">Fashion</Link></li>
                <li><Link to="/category/home" className="block py-1 hover:text-shine-accent transition-colors">Home & Kitchen</Link></li>
                <li><Link to="/category/books" className="block py-1 hover:text-shine-accent transition-colors">Books</Link></li>
                <li><Link to="/category/beauty" className="block py-1 hover:text-shine-accent transition-colors">Beauty & Personal Care</Link></li>
              </ul>
            </div>
            <div className="p-4 border-b border-white/10">
              <h2 className="font-bold text-lg mb-2 text-white">Help & Settings</h2>
              <ul className="space-y-2 text-white/90">
                <li><Link to="/account" className="block py-1 hover:text-shine-accent transition-colors">Your Account</Link></li>
                <li><Link to="/orders" className="block py-1 hover:text-shine-accent transition-colors">Orders</Link></li>
                <li><Link to="/tech" className="block py-1 hover:text-shine-accent transition-colors">Tech Stack</Link></li>
                <li><Link to="/sign-in" className="block py-1 hover:text-shine-accent transition-colors">Sign In</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
