'use client';

import type { FC } from 'react';
import { useState, useMemo } from 'react';
import ProductCard from '@/components/product-card';
import ProductFilters from '@/components/product-filters';
import { products as allProducts } from '@/lib/data';
import type { Product } from '@/lib/types';

const Home: FC = () => {
  const [filters, setFilters] = useState({
    style: 'all',
    brand: 'all',
    material: 'all',
  });

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const { style, brand, material } = filters;
      return (
        (style === 'all' || product.style === style) &&
        (brand === 'all' || product.brand === brand) &&
        (material === 'all' || product.material === material)
      );
    });
  }, [filters]);

  const styles = useMemo(() => ['all', ...Array.from(new Set(allProducts.map(p => p.style)))], []);
  const brands = useMemo(() => ['all', ...Array.from(new Set(allProducts.map(p => p.brand)))], []);
  const materials = useMemo(() => ['all', ...Array.from(new Set(allProducts.map(p => p.material)))], []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Discover Our Collection</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated selection of premium eyewear, designed to blend timeless style with modern craftsmanship.
        </p>
      </div>

      <div className="mb-8">
        <ProductFilters 
          filters={filters} 
          setFilters={setFilters} 
          styles={styles}
          brands={brands}
          materials={materials}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="font-headline text-2xl mb-2">No Products Found</h2>
          <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
