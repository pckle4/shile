
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, X, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MegaMenu from './MegaMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-4'}`}>
      {/* Top Navigation Bar */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold shine-text">Shine</span>
          </Link>
          
          {/* Slogan - Only show on desktop and when not scrolled */}
          {!isMobile && !scrolled && (
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm text-center font-medium text-muted-foreground">
              Shop in no time <span className="text-xs block">A Nowlite.com venture</span>
            </div>
          )}
          
          {/* Delivery Location */}
          <div className="hidden md:flex items-center mr-4">
            <MapPin className="h-5 w-5 mr-1 text-shine-purple" />
            <div className="text-sm">
              <div className="text-muted-foreground">Deliver to</div>
              <div className="font-bold">India</div>
            </div>
          </div>
          
          {/* Search */}
          <div className={`flex-1 max-w-md mx-4 relative ${isSearchFocused ? 'z-20' : ''}`}>
            <div className="flex">
              <Input
                type="text"
                placeholder="Search products..."
                className="rounded-full pr-12 border-shine-purple/20 focus:border-shine-purple"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Button 
                className="absolute right-0 rounded-full bg-shine-purple text-white hover:bg-shine-accent" 
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Tech Stack Link */}
          <Link to="/tech" className="hidden md:flex items-center text-sm mr-3 hover:text-shine-purple transition-colors">
            <Code className="h-4 w-4 mr-1" />
            <span>Tech Stack</span>
          </Link>
          
          {/* Account */}
          <div className="hidden md:block">
            <Link to="/account" className="text-sm hover:text-shine-purple transition-colors">
              <div className="text-muted-foreground text-xs">Hello, Sign in</div>
              <div className="font-medium">Account</div>
            </Link>
          </div>
          
          {/* Cart */}
          <Link to="/cart" className="flex items-center ml-4 hover:text-shine-purple transition-colors">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 bg-shine-accent text-white">3</Badge>
            </div>
            <span className="hidden md:inline ml-1 font-medium">Cart</span>
          </Link>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              className="ml-2 text-foreground"
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
              <Button variant="ghost" className="text-sm flex items-center rounded-full">
                <Menu className="h-4 w-4 mr-1" />
                All
              </Button>
              <MegaMenu />
            </div>
          ) : (
            <div className="overflow-x-auto flex py-2">
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full">
                Today's Deals
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full">
                Best Sellers
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full">
                Electronics
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full">
                Fashion
              </Button>
              <Button variant="ghost" className="text-sm whitespace-nowrap rounded-full">
                Books
              </Button>
            </div>
          )}
        </nav>
      </div>
      
      {/* Mobile Menu (Shown when menu button is clicked) */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="glass h-full w-4/5 max-w-xs overflow-y-auto animate-fade-in">
            <div className="bg-shine-purple text-white p-4 flex items-center justify-between">
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
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg mb-2">Shop By Department</h2>
              <ul className="space-y-2">
                <li><Link to="/category/electronics" className="block py-1 hover:text-shine-purple transition-colors">Electronics</Link></li>
                <li><Link to="/category/fashion" className="block py-1 hover:text-shine-purple transition-colors">Fashion</Link></li>
                <li><Link to="/category/home" className="block py-1 hover:text-shine-purple transition-colors">Home & Kitchen</Link></li>
                <li><Link to="/category/books" className="block py-1 hover:text-shine-purple transition-colors">Books</Link></li>
                <li><Link to="/category/beauty" className="block py-1 hover:text-shine-purple transition-colors">Beauty & Personal Care</Link></li>
              </ul>
            </div>
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg mb-2">Help & Settings</h2>
              <ul className="space-y-2">
                <li><Link to="/account" className="block py-1 hover:text-shine-purple transition-colors">Your Account</Link></li>
                <li><Link to="/orders" className="block py-1 hover:text-shine-purple transition-colors">Orders</Link></li>
                <li><Link to="/tech" className="block py-1 hover:text-shine-purple transition-colors">Tech Stack</Link></li>
                <li><Link to="/sign-in" className="block py-1 hover:text-shine-purple transition-colors">Sign In</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
