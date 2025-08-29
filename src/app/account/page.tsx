import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';

const favoriteProducts = products.slice(0, 3);

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader className="items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="https://picsum.photos/200" alt="User avatar" data-ai-hint="person portrait" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline text-2xl">Aarav Doe</CardTitle>
              <CardDescription>aarav.doe@example.com</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <Button variant="outline" className="w-full mb-4">Edit Profile</Button>
              <nav className="flex flex-col gap-1">
                <Link href="#profile" className="px-3 py-2 text-sm font-medium rounded-md bg-muted">Profile</Link>
                <Link href="#favorites" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50">Favorites</Link>
                <Link href="#" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50">Order History</Link>
                <Link href="#" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50 text-destructive">Logout</Link>
              </nav>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-3/4">
          <div id="profile" className="mb-12">
            <h2 className="font-headline text-3xl font-bold mb-6">My Profile</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">First Name</p>
                    <p className="font-medium">Aarav</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Name</p>
                    <p className="font-medium">Doe</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">aarav.doe@example.com</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Member Since</p>
                    <p className="font-medium">January 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Separator />
          
          <div id="favorites" className="mt-12">
            <h2 className="font-headline text-3xl font-bold mb-6">My Favorites</h2>
            {favoriteProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  You haven't saved any favorites yet.
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
