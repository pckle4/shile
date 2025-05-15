
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '@/services/productService';

const MegaMenu: React.FC = () => {
  const categories = getCategories();
  
  return (
    <nav className="flex">
      {categories.map((category) => (
        <div key={category.id} className="group relative">
          <Link 
            to={`/category/${category.id}`}
            className="px-3 py-1 text-sm text-white hover:text-amazon-orange block whitespace-nowrap"
          >
            {category.name}
          </Link>
          
          {/* Mega dropdown */}
          <div className="menu-dropdown min-w-[250px]">
            <div className="p-4 bg-white text-black shadow-lg rounded-b-md">
              <h3 className="font-bold mb-2 border-b pb-2">{category.name}</h3>
              <ul className="space-y-1">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <Link 
                      to={`/category/${category.id}/${subcategory.id}`}
                      className="block py-1 px-2 hover:bg-gray-100 rounded"
                    >
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-2 border-t">
                <Link 
                  to={`/category/${category.id}`}
                  className="text-amazon-green font-medium text-sm"
                >
                  See all {category.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Additional menu items */}
      <Link to="/deals" className="px-3 py-1 text-sm text-white hover:text-amazon-orange whitespace-nowrap">
        Today's Deals
      </Link>
      <Link to="/new-releases" className="px-3 py-1 text-sm text-white hover:text-amazon-orange whitespace-nowrap">
        New Releases
      </Link>
      <Link to="/customer-service" className="px-3 py-1 text-sm text-white hover:text-amazon-orange whitespace-nowrap">
        Customer Service
      </Link>
      <Link to="/prime" className="px-3 py-1 text-sm text-white hover:text-amazon-orange whitespace-nowrap">
        Prime
      </Link>
    </nav>
  );
};

export default MegaMenu;
