'use client';

import type { FC, Dispatch, SetStateAction } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface ProductFiltersProps {
  filters: {
    style: string;
    brand: string;
    material: string;
  };
  setFilters: Dispatch<SetStateAction<{
    style: string;
    brand: string;
    material: string;
  }>>;
  styles: string[];
  brands: string[];
  materials: string[];
}

const ProductFilters: FC<ProductFiltersProps> = ({ filters, setFilters, styles, brands, materials }) => {

  const handleFilterChange = (filterType: 'style' | 'brand' | 'material') => (value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="style-filter">Style</Label>
          <Select value={filters.style} onValueChange={handleFilterChange('style')}>
            <SelectTrigger id="style-filter" aria-label="Filter by style">
              <SelectValue placeholder="Filter by style" />
            </SelectTrigger>
            <SelectContent>
              {styles.map(style => (
                <SelectItem key={style} value={style} className="capitalize">{style}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="brand-filter">Brand</Label>
          <Select value={filters.brand} onValueChange={handleFilterChange('brand')}>
            <SelectTrigger id="brand-filter" aria-label="Filter by brand">
              <SelectValue placeholder="Filter by brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map(brand => (
                <SelectItem key={brand} value={brand} className="capitalize">{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="material-filter">Material</Label>
          <Select value={filters.material} onValueChange={handleFilterChange('material')}>
            <SelectTrigger id="material-filter" aria-label="Filter by material">
              <SelectValue placeholder="Filter by material" />
            </SelectTrigger>
            <SelectContent>
              {materials.map(material => (
                <SelectItem key={material} value={material} className="capitalize">{material}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
