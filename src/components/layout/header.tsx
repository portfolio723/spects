'use client';

import Link from 'next/link';
import { Glasses, Heart, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Shop' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Glasses className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold tracking-tight">
              Shastra Spectacles
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account#favorites">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">My Account</span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setMobileMenuOpen(false)}>
                      <Glasses className="h-8 w-8 text-primary" />
                      <span className="font-headline text-xl font-bold tracking-tight">
                        Shastra Spectacles
                      </span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-auto p-6 border-t">
                    <div className="flex justify-around items-center">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="/account#favorites" onClick={() => setMobileMenuOpen(false)}>
                          <Heart className="h-6 w-6" />
                          <span className="sr-only">Favorites</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="sr-only">Shopping Cart</span>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="/account" onClick={() => setMobileMenuOpen(false)}>
                          <User className="h-6 w-6" />
                          <span className="sr-only">My Account</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
