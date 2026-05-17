import { Metadata } from 'next';
import { PricingTable } from '@/components/pricing-table';
import {
  boxHireServices,
  services,
  protectionAddOns,
  tvProtectionAddOns,
  pricingBundles
} from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Truck, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Pricing | StakIt Hire',
  description: 'View our rental prices for moving boxes and equipment in the Greater Penrith Area.',
};

const FACEBOOK_PAGE_URL = "https://www.facebook.com/stakithire";

export default function PricingPage() {
  const standardMattressProtectors = protectionAddOns.filter(
    (s) => s.group === 'Mattress Protector'
  );

  const reusableProtector = protectionAddOns.find(s => s.id === 'reusable-protector');
  
  let modifiedProtectionAddOns = [...standardMattressProtectors];
  if(reusableProtector) {
    const displayReusableProtector = {
      ...reusableProtector,
      id: 'reusable-protector-display',
      name: 'Reusable Mattress Protector (Various Sizes)',
      description: 'Eco-friendly zip-close sleeve. Available for all bed sizes.'
    };
    modifiedProtectionAddOns.push(displayReusableProtector);
  }

  return (
    <div className="container mx-auto max-w-4xl space-y-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">
          Our Pricing
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Affordable and transparent pricing for all your moving needs.
        </p>
      </header>

      <div className="space-y-8">
        <PricingTable
          title="Box Hire"
          description="Build your own moving kit. Prices are for a one-week hire period, with a reduced rate for each additional week."
          services={boxHireServices}
          footerContent={
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <p>
                  For more details on our services, please see our{' '}
                  <Link
                    href="/legal/terms-and-conditions"
                    className="underline hover:text-primary"
                  >
                    Terms and Conditions
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          }
        />

        <PricingTable
          title="Optional Add-Ons"
          description="A range of additional items to help with your move. Hire price is a flat fee covering your entire rental period."
          services={services}
        />

        <PricingTable
          title="Protection Add-Ons"
          description="Protect your valuables during the move. Hire price is a flat fee covering your entire rental period."
          services={modifiedProtectionAddOns}
          subheading="Mattress Protection"
        />

        <PricingTable
          title=""
          description=""
          services={tvProtectionAddOns}
          subheading="TV Protection"
        />
      </div>

      <section className="space-y-4 pt-8">
        <h2 className="text-3xl font-bold text-center">Or, Choose a Pre-Made Moving Kit</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">Save time with our curated bundles. Simply let us know which kit you need when you message us.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {pricingBundles.map(bundle => (
                <Card key={bundle.id} className="flex flex-col border-none shadow-soft">
                    <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <CardTitle>{bundle.name}</CardTitle>
                                <CardDescription>{bundle.description}</CardDescription>
                            </div>
                            <div className="text-right shrink-0">
                                <div className="text-3xl font-bold text-primary">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bundle.price)}
                                </div>
                                {bundle.followOnPrice && (
                                    <p className="text-sm text-muted-foreground">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bundle.followOnPrice)} per extra week
                                    </p>
                                )}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="space-y-2 text-sm text-muted-foreground pt-4 border-t">
                            {bundle.contents.map(item => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <Card className="border-none shadow-soft">
          <CardHeader>
              <CardTitle className="flex items-center gap-2"><Truck className="h-6 w-6 text-primary" /> Delivery & Collection</CardTitle>
          </CardHeader>
          <CardContent>
              <p className="text-muted-foreground">
                  A single, flat fee of <span className="font-bold text-foreground">$30</span> applies to all orders within the Greater Penrith Area. This fee covers both the delivery of your equipment at the start of your rental and the collection from your specified address at the end. No surprises.
              </p>
          </CardContent>
      </Card>

       <Card className="text-center bg-muted/50 border-none">
          <CardContent className="p-8">
              <h2 className="text-2xl font-bold">Ready to book your move?</h2>
              <p className="text-muted-foreground mt-2 mb-6">Send us a message on Facebook with your preferred items and dates.</p>
              <Button asChild size="lg" className="h-14 px-8 bg-[#6930F7]">
                  <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Message us on Facebook
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}