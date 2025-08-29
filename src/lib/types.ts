export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  style: 'classic' | 'modern' | 'vintage' | 'aviator';
  material: 'acetate' | 'metal' | 'titanium' | 'wood';
  images: string[];
  description: string;
  specs: {
    frameWidth: string;
    lensWidth: string;
    lensHeight: string;
    bridge: string;
    armLength: string;
  };
  reviews: {
    id: number;
    author: string;
    rating: number;
    text: string;
  }[];
}
