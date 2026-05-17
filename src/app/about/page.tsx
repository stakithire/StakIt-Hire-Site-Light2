
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Eye, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Who Is StakIt Hire? | StakIt Hire',
  description: 'Learn about the mission and story behind StakIt Hire.',
};

const FACEBOOK_PAGE_URL = "https://www.facebook.com/stakithire";

export default function AboutPage() {
    const aboutImage = placeholderImageData.placeholderImages.find(img => img.id === 'about-hero');
    
  return (
    <div className="container mx-auto max-w-5xl space-y-16 py-12 md:py-24">
      <header className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground tracking-tight">
          Who Is StakIt Hire?
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-sans italic max-w-3xl mx-auto leading-relaxed">
          "Boxes that don't quit — Pack. Stack. Move."
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
                    <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide">Greater Penrith Area's Premium Moving Solution</p>
                 </div>
            </div>
            <CardContent className="p-8 md:p-12 lg:p-16 text-muted-foreground space-y-10 text-lg md:text-xl leading-relaxed">
               <div className="space-y-6">
                <p>
                    Moving is one of life’s biggest headaches — but it doesn’t have to be. Most of the stress doesn’t come from the move itself… it comes from everything leading up to it. Finding boxes. Fighting with tape. Hoping they don’t collapse halfway to the car. Digging through piles of mismatched cardboard and scrunched-up packing paper.
                  </p>
                  <p>
                    We saw the frustration and decided there was a better way. StakIt Hire was born to provide a service that is as reliable as the boxes we hire.
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
                    We deliver the crates to your door, you pack at your own pace, stack them securely, move with confidence, and we collect them when you’re done. That’s it. Zero waste. Zero fuss. Zero “oh no, the box just tore.”
                  </p>
                  <p>
                    As a local business serving the Greater Penrith Area, we take pride in helping our neighbors transition into their new homes with one less thing to worry about.
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
              We are a local business dedicated to serving the Greater Penrith Area. We promise transparent pricing, reliable service, and a friendly face every step of the way.
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
          <CardContent className="pt-10">
              <Button asChild size="lg" variant="secondary" className="h-16 px-12 text-xl font-bold shadow-soft transition-transform hover:scale-105 rounded-2xl">
                  <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-3 h-7 w-7" />
                      Book via Facebook
                      <ArrowRight className="ml-4 h-7 w-7" />
                  </a>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
