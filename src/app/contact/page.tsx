
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, Clock, MessageCircle, MapPin, Send } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl space-y-16 py-12 md:py-24 px-4">
      <header className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground tracking-tight">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to pack, stack, and move? Reach out via Facebook or Email for a fast quote and booking.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        <Card className="border-none shadow-soft rounded-3xl p-4">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl font-headline">Contact Details</CardTitle>
            <CardDescription className="text-lg">
              Direct channels to our Penrith-based logistics team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-4">
            <div className="flex items-start gap-6 group">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <div>
                    <p className="font-bold text-xl mb-1">Email Us</p>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium">
                        {BUSINESS_CONFIG.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Checked daily for quotes and inquiries.</p>
                </div>
            </div>
            <div className="flex items-start gap-6 group">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <div>
                    <p className="font-bold text-xl mb-1">Our Service Area</p>
                    <p className="text-lg text-muted-foreground font-medium">{BUSINESS_CONFIG.serviceArea}</p>
                    <p className="text-sm text-muted-foreground mt-1">Delivering to 20+ local suburbs.</p>
                </div>
            </div>
            <div className="flex items-start gap-6 group">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <div>
                    <p className="font-bold text-xl mb-1">Business Hours</p>
                    <p className="text-lg text-muted-foreground font-medium">7 Days a Week</p>
                    <p className="text-sm text-muted-foreground mt-1">8:00 AM — 6:00 PM</p>
                </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-premium bg-primary text-primary-foreground rounded-3xl p-4 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10">
               <Send className="h-32 w-32" />
           </div>
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl font-headline text-white">How to Book</CardTitle>
            <CardDescription className="text-white/80 text-lg">
                The fastest way to secure your crates and delivery dates.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-4">
            <p className="text-xl leading-relaxed font-medium">
                Choose your preferred method and let us know:
            </p>
            <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    Preferred delivery & collection dates
                </li>
                <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    The items or kit you need
                </li>
                <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    Your delivery address
                </li>
            </ul>
            <div className="flex flex-col gap-4 pt-4">
                <Button asChild size="lg" variant="secondary" className="w-full h-16 text-xl font-bold shadow-soft hover:scale-[1.02] transition-transform rounded-2xl">
                    <a href={BUSINESS_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 h-7 w-7" />
                        Chat via Facebook
                    </a>
                </Button>
                <Button asChild size="lg" className="w-full h-16 bg-accent text-accent-foreground hover:bg-accent/90 border-none text-xl font-bold shadow-soft hover:scale-[1.02] transition-transform rounded-2xl">
                    <a href={`mailto:${BUSINESS_CONFIG.email}`}>
                        <Mail className="mr-3 h-7 w-7" />
                        Email Our Team
                    </a>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="text-center bg-muted/50 border-none shadow-soft rounded-3xl p-8">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Not Sure What You Need?</CardTitle>
            <CardDescription className="text-xl">
                Browse our curated moving bundles for a quick setup.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
              <Button asChild size="lg" className="px-10 h-14 text-lg font-bold rounded-xl shadow-soft">
                  <Link href="/pricing">
                      View Pricing & Kits
                      <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
