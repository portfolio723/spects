import Link from 'next/link';
import { Glasses, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Glasses className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold">
                Shastra Spectacles
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Luxury eyewear for the discerning individual.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">All Glasses</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Men's</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Women's</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shastra Spectacles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
