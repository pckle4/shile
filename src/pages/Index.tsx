
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import CategoryCards from '@/components/CategoryCards';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts, getAllProducts } from '@/services/productService';

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const allProducts = getAllProducts();
  
  // Get a sample of products to display in different sections
  const dealsProducts = allProducts.filter(p => p.originalPrice && p.originalPrice > p.price).slice(0, 5);
  const bestSellers = allProducts.filter(p => p.isBestSeller).slice(0, 5);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Banner */}
        <Banner />
        
        <div className="container mx-auto px-4 py-8">
          {/* Category Cards */}
          <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
          <CategoryCards />
          
          {/* Featured Products */}
          <div className="mb-12">
            <ProductGrid products={featuredProducts} title="Featured Products" />
          </div>
          
          {/* Deals of the Day */}
          <div className="mb-12">
            <ProductGrid products={dealsProducts} title="Deals of the Day" />
          </div>
          
          {/* Best Sellers */}
          <div className="mb-12">
            <ProductGrid products={bestSellers} title="Best Sellers" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
