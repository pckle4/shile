
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MegaMenu from './MegaMenu';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-amazon-blue text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2 px-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold mr-4">
              <span className="text-amazon-orange">eShop</span>
            </Link>
            
            {/* Delivery Location */}
            <div className="hidden md:flex items-center mr-4">
              <MapPin className="h-5 w-5 mr-1" />
              <div className="text-sm">
                <div className="text-gray-300">Deliver to</div>
                <div className="font-bold">India</div>
              </div>
            </div>
            
            {/* Search */}
            <div className={`flex-1 max-w-2xl relative ${isSearchFocused ? 'z-20' : ''}`}>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="rounded-l-md rounded-r-none border-r-0 bg-white text-black focus-visible:ring-amazon-orange"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Button 
                  className="bg-amazon-yellow hover:bg-amazon-orange text-black rounded-l-none rounded-r-md" 
                  size="icon"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Account & Lists */}
            <div className="hidden md:block ml-4">
              <Link to="/account" className="text-sm hover:text-amazon-orange">
                <div className="text-gray-300">Hello, Sign in</div>
                <div className="font-bold">Account & Lists</div>
              </Link>
            </div>
            
            {/* Returns & Orders */}
            <div className="hidden md:block ml-4">
              <Link to="/orders" className="text-sm hover:text-amazon-orange">
                <div className="text-gray-300">Returns</div>
                <div className="font-bold">& Orders</div>
              </Link>
            </div>
            
            {/* Cart */}
            <Link to="/cart" className="flex items-center ml-4">
              <div className="relative">
                <ShoppingCart className="h-7 w-7" />
                <Badge className="absolute -top-2 -right-2 bg-amazon-orange">3</Badge>
              </div>
              <span className="hidden md:inline ml-1 font-bold">Cart</span>
            </Link>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon"
                className="ml-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Secondary Navigation (Categories) */}
      <div className="bg-amazon-lightBlue text-white">
        <div className="container mx-auto">
          <nav className="flex items-center py-1 px-4 overflow-x-auto scrollbar-hide">
            {!isMobile ? (
              <>
                <Button variant="ghost" className="text-white text-sm flex items-center">
                  <Menu className="h-4 w-4 mr-1" />
                  All
                </Button>
                <MegaMenu />
              </>
            ) : (
              <div className="overflow-x-auto flex">
                <Button variant="ghost" className="text-white text-sm whitespace-nowrap">
                  Today's Deals
                </Button>
                <Button variant="ghost" className="text-white text-sm whitespace-nowrap">
                  Best Sellers
                </Button>
                <Button variant="ghost" className="text-white text-sm whitespace-nowrap">
                  Electronics
                </Button>
                <Button variant="ghost" className="text-white text-sm whitespace-nowrap">
                  Fashion
                </Button>
                <Button variant="ghost" className="text-white text-sm whitespace-nowrap">
                  Books
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu (Shown when menu button is clicked) */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-4/5 max-w-xs overflow-y-auto animate-fade-in">
            <div className="bg-amazon-blue text-white p-4 flex items-center">
              <User className="h-6 w-6 mr-2" />
              <span className="text-lg font-bold">Hello, Sign In</span>
            </div>
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg mb-2">Shop By Department</h2>
              <ul className="space-y-2">
                <li><Link to="/category/electronics" className="block py-1">Electronics</Link></li>
                <li><Link to="/category/fashion" className="block py-1">Fashion</Link></li>
                <li><Link to="/category/home" className="block py-1">Home & Kitchen</Link></li>
                <li><Link to="/category/books" className="block py-1">Books</Link></li>
                <li><Link to="/category/beauty" className="block py-1">Beauty & Personal Care</Link></li>
              </ul>
            </div>
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg mb-2">Help & Settings</h2>
              <ul className="space-y-2">
                <li><Link to="/account" className="block py-1">Your Account</Link></li>
                <li><Link to="/orders" className="block py-1">Returns & Orders</Link></li>
                <li><Link to="/customer-service" className="block py-1">Customer Service</Link></li>
                <li><Link to="/sign-in" className="block py-1">Sign In</Link></li>
              </ul>
            </div>
            <Button 
              className="m-4" 
              variant="outline"
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
