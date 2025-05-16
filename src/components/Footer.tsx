
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github as GithubIcon, Code, GitMerge as GitlabIcon, 
         Atom as ReactIcon, Database, FileJson as Html, FileCode as Css, 
         Palette as Tailwind } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="w-full mt-20">
      {/* Back to top button */}
      <div 
        className="bg-shine-purple hover:bg-shine-purple/90 text-white py-3 text-center cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="flex items-center justify-center">
          <ArrowUp className="h-4 w-4 mr-2" />
          <span>Back to top</span>
        </div>
      </div>
      
      {/* Main Footer Links */}
      <div className="bg-shine-dark text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold mb-4 text-xl text-shine-accent">Get to Know Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-shine-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-shine-accent transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-shine-accent transition-colors">Press Releases</Link></li>
              <li><Link to="/cares" className="hover:text-shine-accent transition-colors">Shine Cares</Link></li>
              <li><Link to="/gift-cards" className="hover:text-shine-accent transition-colors">Gift a Smile</Link></li>
              <li><Link to="/sustainability" className="hover:text-shine-accent transition-colors">Shine Science</Link></li>
            </ul>
          </div>
          
          {/* Connect with Us */}
          <div>
            <h3 className="font-bold mb-4 text-xl text-shine-accent">Connect with Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/facebook" className="hover:text-shine-accent transition-colors">Facebook</Link></li>
              <li><Link to="/twitter" className="hover:text-shine-accent transition-colors">Twitter</Link></li>
              <li><Link to="/instagram" className="hover:text-shine-accent transition-colors">Instagram</Link></li>
              <li><Link to="/blog" className="hover:text-shine-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold mb-4 text-xl text-shine-accent">Make Money with Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/sell" className="hover:text-shine-accent transition-colors">Sell on Shine</Link></li>
              <li><Link to="/affiliate" className="hover:text-shine-accent transition-colors">Become an Affiliate</Link></li>
              <li><Link to="/fulfilment" className="hover:text-shine-accent transition-colors">Fulfilment by Shine</Link></li>
              <li><Link to="/advertise" className="hover:text-shine-accent transition-colors">Advertise Your Products</Link></li>
              <li><Link to="/publish" className="hover:text-shine-accent transition-colors">Self-Publish with Us</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="font-bold mb-4 text-xl text-shine-accent">Let Us Help You</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/covid" className="hover:text-shine-accent transition-colors">COVID-19 and Shine</Link></li>
              <li><Link to="/account" className="hover:text-shine-accent transition-colors">Your Account</Link></li>
              <li><Link to="/returns" className="hover:text-shine-accent transition-colors">Returns Centre</Link></li>
              <li><Link to="/purchase-protection" className="hover:text-shine-accent transition-colors">100% Purchase Protection</Link></li>
              <li><Link to="/app" className="hover:text-shine-accent transition-colors">Shine App Download</Link></li>
              <li><Link to="/help" className="hover:text-shine-accent transition-colors">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Tech Stack Section */}
      <div className="bg-shine-dark/80 py-6 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-white font-bold mb-4 flex items-center justify-center">
            <Code className="mr-2 h-5 w-5" /> 
            Built with Modern Technologies
          </h3>
          <div className="flex justify-center space-x-6 flex-wrap">
            <div className="flex items-center text-white/70 hover:text-white transition-colors">
              <ReactIcon className="h-5 w-5 mr-1" />
              <span className="text-sm">React</span>
            </div>
            <div className="flex items-center text-white/70 hover:text-white transition-colors">
              <Tailwind className="h-5 w-5 mr-1" />
              <span className="text-sm">Tailwind</span>
            </div>
            <div className="flex items-center text-white/70 hover:text-white transition-colors">
              <Html className="h-5 w-5 mr-1" />
              <span className="text-sm">HTML5</span>
            </div>
            <div className="flex items-center text-white/70 hover:text-white transition-colors">
              <Css className="h-5 w-5 mr-1" />
              <span className="text-sm">CSS3</span>
            </div>
            <div className="flex items-center text-white/70 hover:text-white transition-colors">
              <Database className="h-5 w-5 mr-1" />
              <span className="text-sm">API</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-white/50">
            <Link to="/tech" className="hover:text-shine-accent transition-colors">View Full Tech Stack</Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-shine-dark text-center py-8">
        <div className="container mx-auto px-4">
          {/* Language Selector */}
          <div className="inline-block border border-gray-600 rounded-full px-4 py-1.5 mb-6">
            <select className="bg-transparent outline-none text-white">
              <option>English</option>
              <option>हिन्दी - Hindi</option>
              <option>தமிழ் - Tamil</option>
              <option>తెలుగు - Telugu</option>
              <option>ಕನ್ನಡ - Kannada</option>
              <option>മലയാളം - Malayalam</option>
            </select>
          </div>
          
          {/* Countries */}
          <div className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <li><Link to="/au" className="hover:text-shine-accent transition-colors">Australia</Link></li>
              <li><Link to="/br" className="hover:text-shine-accent transition-colors">Brazil</Link></li>
              <li><Link to="/ca" className="hover:text-shine-accent transition-colors">Canada</Link></li>
              <li><Link to="/fr" className="hover:text-shine-accent transition-colors">France</Link></li>
              <li><Link to="/de" className="hover:text-shine-accent transition-colors">Germany</Link></li>
              <li><Link to="/it" className="hover:text-shine-accent transition-colors">Italy</Link></li>
              <li><Link to="/jp" className="hover:text-shine-accent transition-colors">Japan</Link></li>
              <li><Link to="/mx" className="hover:text-shine-accent transition-colors">Mexico</Link></li>
              <li><Link to="/nl" className="hover:text-shine-accent transition-colors">Netherlands</Link></li>
              <li><Link to="/sg" className="hover:text-shine-accent transition-colors">Singapore</Link></li>
              <li><Link to="/es" className="hover:text-shine-accent transition-colors">Spain</Link></li>
              <li><Link to="/ae" className="hover:text-shine-accent transition-colors">United Arab Emirates</Link></li>
              <li><Link to="/gb" className="hover:text-shine-accent transition-colors">United Kingdom</Link></li>
              <li><Link to="/us" className="hover:text-shine-accent transition-colors">United States</Link></li>
            </ul>
          </div>
          
          {/* Copyright */}
          <div>
            <p className="text-xs text-gray-400">
              &copy; 2025 Shine - Shop in no time. A <span className="font-medium text-shine-accent">Nowlite.com</span> venture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
