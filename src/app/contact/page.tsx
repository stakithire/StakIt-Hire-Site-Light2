'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, Clock, MessageCircle, MapPin } from 'lucide-react';

const FACEBOOK_PAGE_URL = "https://www.facebook.com/stakithire";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-headline font-bold text-foreground">
          Contact Us
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Have a question or ready to book? We&apos;re just a message away.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-none shadow-soft">
          <CardHeader>
            <CardTitle>Direct Contact</CardTitle>
            <CardDescription>
              Reach out to us directly via email or our service area.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="font-semibold">Email Us</p>
                    <a href="mailto:stakithire@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        stakithire@gmail.com
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-muted-foreground">Greater Penrith Area, NSW</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-muted-foreground">7 days a week 8am-6pm</p>
                </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-premium bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-white">Get Started</CardTitle>
            <CardDescription className="text-white/80">
                The fastest way to get a quote and confirm your booking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
                Choose your preferred way to reach out. Just let us know:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/90">
                <li>Your preferred delivery & collection dates</li>
                <li>The items or kit you need</li>
                <li>Your delivery address</li>
            </ul>
            <div className="flex flex-col gap-4 pt-2">
                <Button asChild size="lg" variant="secondary" className="w-full h-14 text-primary font-bold shadow-soft hover:scale-[1.02] transition-transform">
                    <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 h-6 w-6" />
                        Open Facebook Chat
                    </a>
                </Button>
                <Button asChild size="lg" className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 border-none font-bold shadow-soft hover:scale-[1.02] transition-transform">
                    <a href="mailto:stakithire@gmail.com">
                        <Mail className="mr-3 h-6 w-6" />
                        Email Us Directly
                    </a>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="text-center bg-muted/50 border-none shadow-soft">
          <CardHeader>
            <CardTitle>View Our Packages</CardTitle>
            <CardDescription>
                Not sure what you need? Check out our curated moving kits.
            </CardDescription>
          </CardHeader>
          <CardContent>
              <Button asChild variant="outline">
                  <Link href="/pricing">
                      View Pricing & Kits
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
