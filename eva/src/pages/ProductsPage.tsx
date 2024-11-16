import React from 'react';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import { Sparkles } from 'lucide-react';

export function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-100/50">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-600" />
            New Arrivals for Spring 2024
          </div>
          
        
        </div>

        {/* Products Grid */}
        <div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}