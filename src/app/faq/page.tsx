import { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle, Info, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export const metadata: Metadata = {
  title: 'FAQ | StakIt Hire',
  description: 'Frequently asked questions about our 100L moving crate rentals in the Greater Penrith Area.',
};

const faqSections = {
    "Booking & Ordering": [
        {
            question: "How do I book my move?",
            answer: `Booking is fast and manual! Simply message us on Facebook Messenger, call us at ${BUSINESS_CONFIG.phone}, or send an email to ${BUSINESS_CONFIG.email}. Let us know your preferred dates, the items or kit you need, and your delivery address. We will provide a quote and confirm your booking promptly.`
        },
        {
            question: "Can I book via email or phone instead of Facebook?",
            answer: `Yes, absolutely. We offer full support via phone and email for quotes and bookings. Just reach out and our team will assist you with everything you need.`
        },
        {
            question: "How far in advance should I book?",
            answer: "We recommend booking at least 1-2 weeks in advance to secure your preferred delivery and collection windows, especially for weekend moves. However, we always try to accommodate last-minute requests where stock is available."
        },
        {
            question: "Is there a minimum order?",
            answer: "We don't have a strict minimum order, but our $30 flat delivery/collection fee applies to all orders, so most customers find our 25-box 'Studio Starter' or larger kits offer the best value."
        }
    ],
    "Pricing & Payment": [
        {
            question: "When and how do I pay?",
            answer: "Once your booking details are finalized, we will provide a secure payment link or our bank details for a direct transfer. Please note that if paying via bank transfer, funds must be cleared in our account before your order can be confirmed and your delivery scheduled."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit and debit cards via our secure payment links, as well as direct bank transfers. For bank transfers, please ensure you allow enough time for funds to clear before your required delivery date."
        },
        {
            question: "What is included in the kit prices?",
            answer: "All our kit prices include the first full week of hire. If you need more time, we offer affordable 'Extra Week' rates which are significantly cheaper than the initial hire week."
        },
        {
            question: "What is the Box Protection Plan?",
            answer: "For just $20 per order, the Box Protection Plan covers the $20 damage fee for up to three (3) of our moving boxes. It's designed for peace of mind against accidental minor cracks or scuffs. Note: It does not cover lost items or damage to trolleys."
        },
        {
            question: "Are there any hidden fees?",
            answer: "No. We believe in transparency. You pay for your items/kit, a flat $30 delivery/collection fee (within our standard area), and the optional Protection Plan if you choose it. Fees only apply if items are lost, heavily damaged, or if a delivery/collection fails due to customer absence."
        }
    ],
    "Delivery & Logistics": [
        {
            question: "Do I need to be home for delivery or collection?",
            answer: "Yes. To verify inventory counts and ensure equipment is placed correctly, a suitable adult (18+) must be present at the address for both delivery and collection to sign off on the handover."
        },
        {
            question: "What does the delivery fee cover?",
            answer: "Our flat $30 fee covers the entire logistics process: the delivery of the crates to your door and the final collection from your new address at the end of the hire period."
        },
        {
            question: "What if my new house has stairs?",
            answer: "Our crates are stackable and easy to move with the right equipment. We highly recommend hiring one of our 300kg Hand Trolleys or our 180kg Stair Climber Trolleys to make navigating stairs or driveways much easier."
        },
        {
            question: "Can I change my collection date after I've booked?",
            answer: "We understand moving dates can shift. Please give us at least 48 hours' notice if you need to change your collection date. Changes are subject to equipment availability and may incur additional hire fees."
        }
    ],
    "The Equipment": [
        {
            question: "How big are the StakIt boxes?",
            answer: "Our crates are a high-capacity 100L — significantly larger than standard moving boxes. Dimensions are 778mm (L) x 528mm (W) x 378mm (H). They are UV resistant, water-resistant, and dust-resistant (IP65 Certified)."
        },
        {
            question: "Are the boxes clean and sanitized?",
            answer: "Hygiene is a priority. Every single crate and piece of equipment is thoroughly cleaned and sanitized by our team before it is delivered to a new customer."
        },
        {
            question: "Can I use my own labels or tape on the boxes?",
            answer: "Our boxes have dedicated areas for labels. We recommend using our Moving Sticker Packs, as they are designed to be easily removed. Please do not use permanent markers or high-tack industrial tapes directly on the plastic crates."
        },
        {
            question: "How high can I stack the boxes?",
            answer: "Our crates are designed to nest when empty and stack securely when full. We recommend stacking them no more than 4-5 high when full to ensure stability and safety during transport."
        }
    ]
};

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-12 md:py-24 px-4">
      <header className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-foreground tracking-tight">
          Got Questions?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about packing, stacking, and moving with the {BUSINESS_CONFIG.serviceArea}'s premium crate hire service.
        </p>
      </header>

      <div className="space-y-8">
        {Object.entries(faqSections).map(([sectionTitle, items]) => (
             <Card key={sectionTitle} className="border-none shadow-soft rounded-3xl overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                        <Info className="h-6 w-6 text-primary" />
                        {sectionTitle}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                        {items.map((item, index) => (
                            <AccordionItem value={`${sectionTitle}-${index}`} key={index} className="px-6 border-b-primary/5 last:border-0">
                                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6 group">
                                    <span className="group-hover:text-primary transition-colors">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        ))}
      </div>

      <Card className="text-center bg-primary text-primary-foreground border-none shadow-premium py-16 px-8 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-headline font-bold">Still Need Help?</CardTitle>
            <CardDescription className="text-xl text-primary-foreground/80 mt-4">
                Our local team is ready to answer any specific questions via your preferred channel.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-10 flex flex-col md:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold bg-accent text-accent-foreground border-none shadow-soft transition-transform hover:scale-105 rounded-2xl">
                  <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\s/g, '')}`}>
                      <Phone className="mr-3 h-7 w-7" />
                      Call: {BUSINESS_CONFIG.phone}
                  </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold shadow-soft transition-transform hover:scale-105 rounded-2xl">
                  <a href={BUSINESS_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-3 h-7 w-7" />
                      Chat on Facebook
                  </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl font-bold text-white border-white/20 hover:bg-white/10 transition-transform hover:scale-105 rounded-2xl">
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
