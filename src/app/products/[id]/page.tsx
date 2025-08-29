import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/types';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product: Product | undefined = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={img}
                        alt={`${product.name} - view ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto aspect-[4/3] object-cover"
                        data-ai-hint="eyewear product"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{product.brand}</p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold my-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.round(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length) ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">({product.reviews.length} reviews)</span>
          </div>
          <p className="text-3xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-base text-foreground/80 mb-6">{product.description}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <Heart className="mr-2 h-5 w-5" /> Add to Favorites
            </Button>
          </div>

          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specs">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between"><span>Frame Width:</span> <strong>{product.specs.frameWidth}</strong></li>
                    <li className="flex justify-between"><span>Lens Width:</span> <strong>{product.specs.lensWidth}</strong></li>
                    <li className="flex justify-between"><span>Lens Height:</span> <strong>{product.specs.lensHeight}</strong></li>
                    <li className="flex justify-between"><span>Bridge:</span> <strong>{product.specs.bridge}</strong></li>
                    <li className="flex justify-between"><span>Arm Length:</span> <strong>{product.specs.armLength}</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
                <Card>
                  <CardContent className="pt-6">
                    {product.reviews.length > 0 ? (
                      <Accordion type="single" collapsible className="w-full">
                        {product.reviews.map((review) => (
                          <AccordionItem key={review.id} value={`item-${review.id}`}>
                            <AccordionTrigger>
                              <div className="flex items-center gap-4">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
                                  ))}
                                </div>
                                <span>by {review.author}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              {review.text}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">No reviews yet.</p>
                    )}
                  </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
