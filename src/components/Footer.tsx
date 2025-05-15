
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white text-black w-full mt-10">
      {/* Back to top button */}
      <div 
        className="bg-amazon-lightBlue bg-opacity-80 hover:bg-opacity-100 text-white py-3 text-center cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="flex items-center justify-center">
          <ArrowUp className="h-4 w-4 mr-2" />
          <span>Back to top</span>
        </div>
      </div>
      
      {/* Main Footer Links */}
      <div className="bg-amazon-blue text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:underline">Press Releases</Link></li>
              <li><Link to="/cares" className="hover:underline">eShop Cares</Link></li>
              <li><Link to="/gift-cards" className="hover:underline">Gift a Smile</Link></li>
              <li><Link to="/sustainability" className="hover:underline">eShop Science</Link></li>
            </ul>
          </div>
          
          {/* Connect with Us */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Connect with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/facebook" className="hover:underline">Facebook</Link></li>
              <li><Link to="/twitter" className="hover:underline">Twitter</Link></li>
              <li><Link to="/instagram" className="hover:underline">Instagram</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          
          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/sell" className="hover:underline">Sell on eShop</Link></li>
              <li><Link to="/affiliate" className="hover:underline">Become an Affiliate</Link></li>
              <li><Link to="/fulfilment" className="hover:underline">Fulfilment by eShop</Link></li>
              <li><Link to="/advertise" className="hover:underline">Advertise Your Products</Link></li>
              <li><Link to="/publish" className="hover:underline">Self-Publish with Us</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/covid" className="hover:underline">COVID-19 and eShop</Link></li>
              <li><Link to="/account" className="hover:underline">Your Account</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns Centre</Link></li>
              <li><Link to="/purchase-protection" className="hover:underline">100% Purchase Protection</Link></li>
              <li><Link to="/app" className="hover:underline">eShop App Download</Link></li>
              <li><Link to="/help" className="hover:underline">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>
      
      {/* Bottom Footer */}
      <div className="bg-amazon-blue pb-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          {/* Language Selector */}
          <div className="inline-block border border-gray-600 rounded px-3 py-1 mb-4">
            <select className="bg-transparent outline-none">
              <option>English</option>
              <option>हिन्दी - Hindi</option>
              <option>தமிழ் - Tamil</option>
              <option>తెలుగు - Telugu</option>
              <option>ಕನ್ನಡ - Kannada</option>
              <option>മലയാളം - Malayalam</option>
            </select>
          </div>
          
          {/* Countries */}
          <div className="mb-4">
            <ul className="flex flex-wrap justify-center gap-4 text-xs">
              <li><Link to="/au" className="hover:underline">Australia</Link></li>
              <li><Link to="/br" className="hover:underline">Brazil</Link></li>
              <li><Link to="/ca" className="hover:underline">Canada</Link></li>
              <li><Link to="/fr" className="hover:underline">France</Link></li>
              <li><Link to="/de" className="hover:underline">Germany</Link></li>
              <li><Link to="/it" className="hover:underline">Italy</Link></li>
              <li><Link to="/jp" className="hover:underline">Japan</Link></li>
              <li><Link to="/mx" className="hover:underline">Mexico</Link></li>
              <li><Link to="/nl" className="hover:underline">Netherlands</Link></li>
              <li><Link to="/sg" className="hover:underline">Singapore</Link></li>
              <li><Link to="/es" className="hover:underline">Spain</Link></li>
              <li><Link to="/ae" className="hover:underline">United Arab Emirates</Link></li>
              <li><Link to="/gb" className="hover:underline">United Kingdom</Link></li>
              <li><Link to="/us" className="hover:underline">United States</Link></li>
            </ul>
          </div>
          
          {/* Copyright */}
          <div>
            <p className="text-xs">
              &copy; 2025 eShop.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
