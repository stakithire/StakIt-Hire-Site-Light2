import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Eye, MessageCircle, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export const metadata: Metadata = {
  title: 'Who Is StakIt Hire? | StakIt Hire',
  description: 'Learn about the mission and story behind StakIt Hire.',
};

export default function AboutPage() {
    const aboutImage = placeholderImageData.placeholderImages.find(img => img.id === 'about-hero');
    
  return (
    <div className="container mx-auto max-w-5xl space-y-16 py-12 md:py-24">
      <header className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground tracking-tight">
          Who Is StakIt Hire?
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-sans italic max-w-3xl mx-auto leading-relaxed">
          "{BUSINESS_CONFIG.tagline}"
        </p>
      </header>

      {aboutImage && (
         <Card className="overflow-hidden rounded-3xl shadow-premium border-none">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={aboutImage.imageUrl}
                    alt="Our mission in action"
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 w-full">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-2">Our Story</h2>
                    <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide">{BUSINESS_CONFIG.serviceArea}'s Premium Moving Solution</p>
                 </div>
            </div>
            <CardContent className="p-8 md:p-12 lg:p-16 text-muted-foreground space-y-10 text-lg md:text-xl leading-relaxed">
               <div className="space-y-6">
                <p>
                    Moving is one of life’s biggest headaches — but it doesn’t have to be. Most of the stress doesn’t come from the move itself… it comes from everything leading up to it. Finding boxes that have been sitting in a garage for years, fighting with rolls of tape that never seem to stick, and the constant worry that a flimsy cardboard base might collapse halfway to the car. 
                  </p>
                  <p>
                    We’ve all seen the chaos: mismatched boxes, scrunched-up newspaper, and the inevitable mountain of waste that ends up on the curb after moving day. We saw the frustration and decided there was a better way. StakIt Hire was born out of a simple observation: the tools we use for one of the most important transitions in our lives were outdated, unreliable, and incredibly wasteful.
                  </p>
                  <p>
                    We decided to build a service that is as reliable as the boxes we hire. We didn't just want to provide crates; we wanted to provide a smarter, more community-focused system for our neighbors in Penrith.
                  </p>
               </div>
                
                <div className="bg-primary/5 p-10 rounded-3xl border-l-8 border-primary shadow-soft">
                    <p className="font-headline font-bold text-foreground text-3xl mb-6">A Modern Way to Move</p>
                    <p>
                        Our goal is to replace the chaos of packing with a system that’s strong, simple, and built for real life. Our durable, reusable crates are designed to survive whatever your move throws at them — stairs, rain, heavy books, awkward kitchen gear. They don’t crumple. They don’t buckle. They don’t quit.
                    </p>
                </div>

                <div className="space-y-6">
                  <p>
                    We believe that a move should be marked by excitement for a new chapter, not exhaustion from the preparation. By providing high-capacity, industrial-strength crates, we take the guesswork out of packing. We deliver the crates to your door, you pack at your own pace, stack them securely, move with confidence, and we collect them when you’re done. 
                  </p>
                  <p>
                    That’s it. Zero waste to dispose of, zero rolls of tape to struggle with, and zero "oh no, the box just tore" moments. It’s a cleaner, faster, and more sustainable way to get where you’re going.
                  </p>
                  <p>
                    As a local business serving the {BUSINESS_CONFIG.serviceArea}, we take pride in helping our neighbors transition into their new homes with one less thing to worry about. We aren't just a hire service; we are your partners in making your next move your best move.
                  </p>
                </div>
            </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-3 gap-10">
        <Card className="border-none shadow-soft hover:shadow-premium transition-all duration-300 rounded-3xl group">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-7 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
               <Target className="h-10 w-10 text-primary group-hover:text-white" />
            </div>
            <CardTitle className="text-2xl mt-6 font-headline font-bold">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-8 pb-10">
            <p className="text-muted-foreground leading-relaxed">
              To make the moving process simpler, smarter, and more sustainable for our community by providing a hassle-free rental service for high-quality moving equipment.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft hover:shadow-premium transition-all duration-300 rounded-3xl group">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-7 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
               <Eye className="h-10 w-10 text-primary group-hover:text-white" />
            </div>
            <CardTitle className="text-2xl mt-6 font-headline font-bold">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-8 pb-10">
            <p className="text-muted-foreground leading-relaxed">
                To become the go-to alternative to cardboard boxes, setting a new standard for how people pack, move, and organise — with cleaner, smarter, and more sustainable solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft hover:shadow-premium transition-all duration-300 rounded-3xl group">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-7 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
               <Users className="h-10 w-10 text-primary group-hover:text-white" />
            </div>
            <CardTitle className="text-2xl mt-6 font-headline font-bold">Our Commitment</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-8 pb-10">
            <p className="text-muted-foreground leading-relaxed">
              We are a local business dedicated to serving the {BUSINESS_CONFIG.serviceArea}. We promise transparent pricing, reliable service, and a friendly face every step of the way.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="text-center bg-primary text-primary-foreground border-none shadow-premium py-16 px-8 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-4xl md:text-6xl font-headline font-bold">Ready to Plan Your Move?</CardTitle>
            <CardDescription className="text-xl md:text-2xl text-primary-foreground/80 mt-4">
                Let us help make it your easiest one yet.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-10 flex flex-col md:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-12 text-xl font-bold bg-accent text-accent-foreground border-none shadow-soft transition-transform hover:scale-105 rounded-2xl">
                  <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\s/g, '')}`}>
                      <Phone className="mr-3 h-7 w-7" />
                      Call Us: {BUSINESS_CONFIG.phone}
                  </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-16 px-12 text-xl font-bold shadow-soft transition-transform hover:scale-105 rounded-2xl">
                  <a href={BUSINESS_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-3 h-7 w-7" />
                      Book via Facebook
                  </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 text-xl font-bold text-white border-white/20 hover:bg-white/10 transition-transform hover:scale-105 rounded-2xl">
                  <a href={`mailto:${BUSINESS_CONFIG.email}`}>
                      <Mail className="mr-3 h-7 w-7" />
                      Email Our Team
                  </a>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
