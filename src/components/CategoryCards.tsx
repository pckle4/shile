
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '@/services/productService';
import { Card, CardContent } from '@/components/ui/card';

const CategoryCards: React.FC = () => {
  const categories = getCategories();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {categories.map((category) => (
        <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <h2 className="font-bold text-lg mb-3">{category.name}</h2>
            <div className="grid grid-cols-2 gap-2">
              {category.subcategories.slice(0, 4).map((subcategory) => (
                <Link 
                  key={subcategory.id} 
                  to={`/category/${category.id}/${subcategory.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {subcategory.name}
                </Link>
              ))}
            </div>
            <Link 
              to={`/category/${category.id}`} 
              className="block mt-4 text-sm text-amazon-green font-medium"
            >
              Shop all {category.name}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoryCards;
