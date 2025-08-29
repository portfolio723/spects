import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A stylish person wearing glasses"
        fill
        className="object-cover"
        priority
        data-ai-hint="person wearing glasses"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative h-full flex flex-col justify-end items-center text-center text-white pb-16 px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          See The World Differently
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 drop-shadow-md">
          Discover our new collection of handcrafted eyewear, where timeless design meets modern technology.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 transition-transform hover:scale-105">
            <Link href="/">Shop New Arrivals</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
