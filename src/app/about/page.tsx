import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Our Vision</h1>
            <p className="text-lg text-muted-foreground mb-6">
              At Shastra Spectacles, we believe that eyewear is more than just a tool for vision correction; it is a profound expression of personal style and identity. Our journey began with a simple idea: to create exceptional glasses that blend timeless craftsmanship with contemporary design, all while prioritizing comfort and quality.
            </p>
            <p className="text-muted-foreground">
              Founded by a team of passionate artisans and optical experts, Shastra is dedicated to the art of eyewear. We meticulously source the finest materials from around the globe—from rich acetates and ultra-lightweight titanium to sustainably-harvested woods—to ensure every pair is a masterpiece. Our name, 'Shastra', a term for knowledge in ancient texts, reflects our commitment to expertise, precision, and the thoughtful creation of every frame. We invite you to see the world differently through our eyes.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/600/700"
              alt="Artisan crafting glasses"
              width={600}
              height={700}
              className="w-full h-full object-cover"
              data-ai-hint="artisan workshop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
