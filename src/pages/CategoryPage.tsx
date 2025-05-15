
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCategory, getCategories } from '@/services/productService';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowDownUp, SlidersHorizontal } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryId, subcategoryId } = useParams<{ categoryId: string; subcategoryId: string }>();
  const [showFilters, setShowFilters] = useState(false);
  
  // Get category information
  const categories = getCategories();
  const category = categories.find(c => c.id === categoryId);
  
  // Get products in this category
  const products = getProductsByCategory(categoryId || '');
  
  // Sorting and filtering options
  const [sortOption, setSortOption] = useState("relevance");
  const [priceRange, setPriceRange] = useState<string[]>([]);
  
  // Price ranges for filtering
  const priceRanges = [
    { id: "under1000", label: "Under ₹1,000", value: "0-1000" },
    { id: "1000-5000", label: "₹1,000 - ₹5,000", value: "1000-5000" },
    { id: "5000-10000", label: "₹5,000 - ₹10,000", value: "5000-10000" },
    { id: "10000-20000", label: "₹10,000 - ₹20,000", value: "10000-20000" },
    { id: "over20000", label: "Over ₹20,000", value: "20000-999999" },
  ];
  
  // Apply filters
  const filteredProducts = products.filter(product => {
    // Price range filtering
    if (priceRange.length > 0) {
      const inRange = priceRange.some(range => {
        const [min, max] = range.split("-").map(Number);
        return product.price >= min && product.price <= max;
      });
      if (!inRange) return false;
    }
    return true;
  });
  
  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "low-to-high":
        return a.price - b.price;
      case "high-to-low":
        return b.price - a.price;
      case "avg-rating":
        return b.rating.rate - a.rating.rate;
      default:
        return 0; // relevance (default order)
    }
  });
  
  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link to="/" className="text-amazon-green">
              Return to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-amazon-green">Home</Link>
            {' > '}
            <span className="text-gray-700">{category.name}</span>
            {subcategoryId && ' > '}
            {subcategoryId && (
              <span className="text-gray-700">
                {category.subcategories.find(s => s.id === subcategoryId)?.name}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex justify-between items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>Filters</span>
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className={`w-full md:w-64 shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white p-4 rounded-lg border">
                <h2 className="font-bold text-lg mb-4">Filters</h2>
                
                {/* Price Range Filter */}
                <Accordion type="single" collapsible defaultValue="price">
                  <AccordionItem value="price">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {priceRanges.map((range) => (
                          <div key={range.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={range.id}
                              checked={priceRange.includes(range.value)}
                              onCheckedChange={(checked) => {
                                setPriceRange(
                                  checked
                                    ? [...priceRange, range.value]
                                    : priceRange.filter(r => r !== range.value)
                                );
                              }}
                            />
                            <label 
                              htmlFor={range.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {range.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Customer Reviews */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="reviews">
                    <AccordionTrigger>Customer Reviews</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <label 
                              htmlFor={`rating-${rating}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                            >
                              {rating}+ Stars
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Brand */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="brand">
                    <AccordionTrigger>Brand</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Samsung", "Apple", "Sony", "LG", "HP"].map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox id={`brand-${brand}`} />
                            <label 
                              htmlFor={`brand-${brand}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Availability */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="availability">
                    <AccordionTrigger>Availability</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="include-oos" />
                          <label 
                            htmlFor="include-oos"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Include Out of Stock
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Mobile: Close Filters button */}
                <div className="mt-4 md:hidden">
                  <Button 
                    className="w-full"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Section */}
            <div className="flex-1">
              {/* Sort Controls */}
              <div className="bg-white p-4 rounded-lg border mb-4 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <span className="text-gray-500">
                    {sortedProducts.length} results
                  </span>
                </div>
                
                <div className="flex items-center">
                  <label className="text-sm mr-2">Sort by:</label>
                  <select
                    className="border rounded p-1 text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="relevance">Relevance</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                    <option value="avg-rating">Avg. Customer Review</option>
                  </select>
                </div>
              </div>
              
              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <ProductGrid products={sortedProducts} />
              ) : (
                <div className="bg-white p-8 rounded-lg border text-center">
                  <h3 className="text-lg font-bold mb-2">No products found</h3>
                  <p>Try adjusting your filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
