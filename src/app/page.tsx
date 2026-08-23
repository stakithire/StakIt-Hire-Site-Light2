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
import { PackageSearch, Truck, Leaf, Sparkles, ArrowRight, MapPin, Rocket, Smile, Home, MessageCircle, Mail, Box, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export const metadata: Metadata = {
  title: 'StakIt Hire | Boxes That Don\'t Quit',
  description: 'Eco-friendly, durable, and stackable moving crates delivered to your door. Greater Penrith Area.',
};

const serviceSuburbs = [
  "Penrith", "South Penrith", "Glenmore Park", "Jordan Springs", 
  "Cranebrook", "Emu Plains", "Emu Heights", "Werrington", 
  "Werrington County", "Caddens", "Claremont Meadows", "Orchard Hills", 
  "Leonay", "Mulgoa", "Silverdale", "Wallacia", "Warragamba", "Jamisontown",
  "Llandilo", "Regentville"
];

export default function HomePage() {
  const { placeholderImages } = placeholderImageData;
  const heroImage = placeholderImages.find(img => img.id === 'hero-background');

  return (
    <div className="space-y-16 pb-12">
        {/* Hero Section */}
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
                    {BUSINESS_CONFIG.tagline}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Everything you need to move house — delivered to your door, organised, and taken away when you're done.
                    <span className="block mt-6 font-semibold tracking-wide border-t border-white/30 pt-6">No cardboard. No chaos. No wasted time.</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="h-16 px-8 text-xl font-bold bg-[#6930F7] hover:bg-[#6930F7]/90 shadow-xl transition-transform hover:scale-105">
                        <Link href="/pricing">View Prices</Link>
                    </Button>
                    <Button asChild size="lg" className="h-16 px-8 text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl transition-transform hover:scale-105 border-none">
                        <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\s/g, '')}`}>
                           <Phone className="mr-3 h-6 w-6" />
                           Call: {BUSINESS_CONFIG.phone}
                        </a>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="h-16 px-8 text-xl font-bold shadow-xl transition-transform hover:scale-105">
                        <a href={BUSINESS_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
                           <MessageCircle className="mr-3 h-6 w-6" />
                           Facebook
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        {/* Refined "What We Do" Section (No Image) */}
        <section className="container mx-auto px-4">
            <Card className="border-none shadow-premium rounded-[3rem] overflow-hidden bg-white p-8 md:p-16">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="bg-primary/10 text-primary px-5 py-2 rounded-full w-fit mx-auto font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                        <Box className="h-5 w-5" />
                        What We Do
                    </div>
                    <h2 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
                        Smart moving supplies, delivered.
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        We deliver professional-grade moving equipment directly to your door and collect it when you're finished, taking the stress and waste out of your move.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-headline font-bold flex items-center gap-3">
                            <Truck className="h-6 w-6 text-primary" />
                            Full Service Delivery
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We bring everything you need for a successful move—from our signature <strong>industrial-strength 100L crates</strong> and bubble wrap to furniture blankets, mattress protectors, and heavy-duty trolleys. Once your move is complete, we collect everything from your new address.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-headline font-bold flex items-center gap-3">
                            <Sparkles className="h-6 w-6 text-primary" />
                            Convenient & Flexible
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Every home is unique. Choose one of our <strong>curated moving kits</strong> for maximum convenience, or pick exactly what you need item-by-item. Our goal is to provide a smarter, cleaner, and more sustainable way to get you where you're going.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
                    <Button asChild className="rounded-2xl h-16 px-10 text-xl font-bold shadow-soft transition-transform hover:scale-105">
                        <Link href="/pricing">View Kits & Pricing</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-2xl h-16 px-10 text-xl font-bold border-2 transition-transform hover:scale-105">
                        <Link href="/quote">Use Calculator</Link>
                    </Button>
                </div>
            </Card>
        </section>

        {/* Suburbs Section */}
        <section className="container mx-auto px-4">
            <Card className="bg-primary/5 border-primary/20 shadow-soft rounded-[2.5rem] overflow-hidden h-auto">
                <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 mb-8">
                        <div className="bg-primary/10 p-5 rounded-3xl">
                            <MapPin className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-headline font-bold text-foreground">Proudly Serving the Penrith Area</h2>
                            <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
                                Local business. Local delivery. Local support. No call centre. No franchise. Just practical moving solutions delivered by locals.
                                <span className="block mt-4 font-bold text-primary">Note: If outside the area please message us for a custom delivery quote.</span>
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10 pt-10">
                        <p className="text-center font-bold text-foreground uppercase tracking-widest text-sm mb-8">Major Suburbs Covered</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {serviceSuburbs.map(suburb => (
                                <div key={suburb} className="group relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative bg-white border-2 border-primary/10 text-primary px-4 py-3 rounded-2xl text-center text-sm font-bold shadow-sm transition-all duration-300 group-hover:border-primary group-hover:shadow-soft group-hover:-translate-y-1">
                                        {suburb}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center h-auto">
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
                  <h3 className="text-2xl font-headline font-bold">2. Contact Our Team</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed px-4">Call, Message or Email us your dates and address. We'll confirm your booking promptly.</p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                  <div className="bg-primary/10 p-8 rounded-3xl shadow-soft">
                      <Truck className="h-14 w-14 text-primary" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold">3. We Deliver & Collect</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed px-4">We bring everything to your door — and pick it up when you're done.</p>
              </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="container mx-auto px-4">
          <div className="py-24 bg-primary/5 rounded-[4rem] px-8 md:px-16 text-center h-auto">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16">
                Why Choose StakIt Hire?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                  <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                         <Rocket className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">Save Hours Packing</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">Large 100L crates pack faster than cardboard boxes.</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                          <Smile className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">No Box Hunting</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">Delivered to your door when you need them.</p>
                  </div>
                   <div className="flex flex-col items-center space-y-4">
                      <div className="bg-white p-6 rounded-full shadow-premium">
                          <Truck className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold pt-2">No Cleanup</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">We collect everything when you're finished.</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                        <div className="bg-white p-6 rounded-full shadow-premium">
                            <Box className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-headline font-bold pt-2">Everything In One Place</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-[300px]">Crates, bubble wrap, blankets, mattress covers and trolleys.</p>
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
              </div>
          </div>
        </section>

        {/* Everything You Need Section (Product Cards) */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
            Everything You Need. One Delivery.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {carouselItems.map((item) => (
              <div key={item.id} className="group flex flex-col h-full">
                <Card className="overflow-hidden h-auto flex flex-col border-none shadow-soft hover:shadow-premium transition-all duration-300 rounded-[2rem]">
                  <div className="relative h-64 w-full overflow-hidden shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-grow p-6 h-auto">
                      <CardHeader className="p-0 mb-4 h-auto">
                        <CardTitle className="font-headline text-2xl font-bold leading-tight h-auto">
                            {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 flex-grow h-auto">
                        <CardDescription className="text-lg text-muted-foreground leading-relaxed h-auto">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 py-24">
            <div className="text-center">
                <h2 className="text-5xl font-headline font-bold mb-6">Ready for a smarter move?</h2>
                <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">Check out our packages and get in touch to book your delivery dates.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button asChild size="lg" className="h-20 px-10 text-2xl font-bold shadow-premium hover:shadow-premium/80 transition-all bg-[#6930F7] rounded-2xl">
                        <a href={BUSINESS_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-4 h-8 w-8" />
                            Book via Facebook
                        </a>
                    </Button>
                    <Button asChild size="lg" className="h-20 px-10 text-2xl font-bold shadow-premium hover:shadow-premium/80 transition-all bg-accent text-accent-foreground border-none rounded-2xl">
                        <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\s/g, '')}`}>
                            <Phone className="mr-4 h-8 w-8" />
                            Call Our Team
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-20 px-10 text-2xl font-bold shadow-soft transition-all rounded-2xl border-2">
                        <a href={`mailto:${BUSINESS_CONFIG.email}`}>
                            <Mail className="mr-4 h-8 w-8" />
                            Email Us
                        </a>
                    </Button>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-bold text-primary tracking-wide">
                        Available 7 Days a Week: {BUSINESS_CONFIG.phone}
                    </p>
                </div>
            </div>
        </section>
    </div>
  );
}
