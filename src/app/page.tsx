
import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { carouselItems } from '@/lib/data';
import placeholderImageData from '@/lib/placeholder-images.json';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PackageSearch, Truck, Leaf, Sparkles, ArrowRight, MapPin, Rocket, Smile, Home, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'StakIt Hire | Boxes That Don\'t Quit',
  description: 'Eco-friendly, durable, and stackable moving crates delivered to your door. Greater Penrith Area.',
};

const FACEBOOK_PAGE_URL = "https://www.facebook.com/stakithire";

export default function HomePage() {
  const { placeholderImages } = placeholderImageData;
  const heroImage = placeholderImages.find(img => img.id === 'hero-background');

  return (
    <div className="space-y-12">
        <section className="relative text-center py-24 md:py-40 rounded-3xl shadow-premium overflow-hidden mx-4 md:mx-0">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt="StakIt Hire Moving Boxes"
                    fill
                    className="object-cover"
                    priority
                />
            )}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="relative z-10 container mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-4 tracking-tight">
                    Welcome to StakIt Hire
                </h1>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-white/90 tracking-wide uppercase mb-8">
                    Boxes that don&apos;t quit — Pack. Stack. Move.
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Everything you need to move house — delivered to your door, organised, and taken away when you&apos;re done.
                    <span className="block mt-6 font-semibold tracking-wide border-t border-white/30 pt-6">No cardboard. No chaos. No wasted time.</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button asChild size="lg" className="h-16 px-10 text-xl font-bold bg-[#6930F7] hover:bg-[#6930F7]/90 shadow-xl transition-transform hover:scale-105">
                        <Link href="/pricing">View Our Prices</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="h-16 px-10 text-xl font-bold shadow-xl transition-transform hover:scale-105">
                        <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                           <MessageCircle className="mr-3 h-6 w-6" />
                           Message us on Facebook
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4">
            <Card className="bg-primary/5 border-primary/20 shadow-soft rounded-3xl">
                <CardContent className="p-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
                    <div className="bg-primary/10 p-5 rounded-full">
                        <MapPin className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-headline font-bold text-foreground">Currently Servicing the Greater Penrith Area</h2>
                        <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
                            Our standard delivery zone covers the greater Penrith region. If you are outside this area, please message us for a custom quote.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>

      <main className="container mx-auto space-y-24 px-4 pb-24">
        <section>
          <h2 className="text-4xl font-headline font-bold text-center mb-12">
            Our Most Popular Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {carouselItems.map((item) => (
              <div key={item.id} className="group p-1">
                <Card className="overflow-hidden h-full flex flex-col border-none shadow-soft hover:shadow-premium transition-all duration-300 rounded-3xl">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-grow p-4">
                      <CardHeader>
                      <CardTitle className="font-headline text-2xl font-bold">
                          {item.name}
                      </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">{item.description}</CardDescription>
                      </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-headline font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-16 text-center">
              <div className="flex flex-col items-center space-y-6">
                  <div className="bg-primary/10 p-8 rounded-3xl shadow-soft">
                      <PackageSearch className="h-14 w-14 text-primary" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold">1. Choose Your Move Setup</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed px-4">Pick a kit or customise what you need — view our pricing page for details.</p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                  <div className="bg-primary/10 p-8 rounded-3xl shadow-soft">
                      <MessageCircle className="h-14 w-14 text-primary" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold">2. Message Us on Facebook</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed px-4">Send us your dates and address. We&apos;ll confirm your booking in minutes.</p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                  <div className="bg-primary/10 p-8 rounded-3xl shadow-soft">
                      <Truck className="h-14 w-14 text-primary" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold">3. We Deliver & Collect</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed px-4">We bring everything to your door — and pick it up when you&apos;re done.</p>
              </div>
          </div>
        </section>

        <section className="py-24 bg-primary/5 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-[4rem]">
          <div className="container mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16">
                Why Choose StakIt Hire?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                  <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                         <Rocket className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">Move Faster</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">Pack in less time with stackable, ready-to-use crates — no tape, no building boxes.</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                          <Smile className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">Less Stress, Less Mess</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">No cardboard clutter, no last-minute runs to the shops — just a clean, organised move.</p>
                  </div>
                   <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                          <Truck className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">Delivered & Done</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">We drop everything off and collect it when you&apos;re finished. Simple.</p>
                  </div>
                   <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                          <Leaf className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">Smarter & Sustainable</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">Reusable crates that are stronger, cleaner, and better for the environment.</p>
                  </div>
                   <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                          <Sparkles className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">Professionally Cleaned</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">Every crate is thoroughly cleaned and sanitized, ready for your move.</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                        <div className="bg-white p-6 rounded-full shadow-premium">
                            <Home className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-headline font-bold pt-2">Designed for Real Moves</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">From small apartments to full family homes — our kits are built to match your move size.</p>
                    </div>
              </div>
          </div>
        </section>

        <section className="py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-headline font-bold mb-6">Ready for a smarter move?</h2>
                <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">Check out our packages and message us on Facebook to book your delivery dates.</p>
                <Button asChild size="lg" className="h-20 px-14 text-2xl font-bold shadow-premium hover:shadow-premium/80 transition-all bg-[#6930F7] rounded-2xl">
                    <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                        Book via Facebook
                        <ArrowRight className="ml-4 h-8 w-8" />
                    </a>
                </Button>
            </div>
        </section>
      </main>
    </div>
  );
}
