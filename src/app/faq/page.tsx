
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
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | StakIt Hire',
  description: 'Frequently asked questions about our equipment rental services.',
};

const faqSections = {
    "Booking & Ordering": [
        {
            question: "How do I book my move?",
            answer: "Booking is simple! Just browse our packages and message us on Facebook Messenger. Let us know your preferred delivery and collection dates, the items you need, and your delivery address. We'll confirm everything with you in the chat."
        },
        {
            question: "Do I need to create an account?",
            answer: "No account is required. We manage everything directly through our official Facebook Messenger chat to keep things fast and easy for you."
        },
        {
            question: "How far in advance should I book?",
            answer: "We recommend booking at least one to two weeks in advance to ensure availability, especially during peak moving seasons. However, we will always do our best to accommodate last-minute requests via Messenger."
        },
        {
            question: "Can I change my order after it has been placed?",
            answer: "Yes, you can modify your order up to 48 hours before your scheduled delivery date, subject to availability. Just send us a message in our Facebook chat and we will update your booking."
        }
    ],
    "Pricing & Payment": [
        {
            question: "When and how do I pay?",
            answer: "Once we have finalized your booking details in Messenger, we will send you a secure payment link. You can complete your payment safely online through this link using your preferred method. Payment must be completed before the delivery is scheduled."
        },
        {
            question: "What is the standard hire period?",
            answer: "Our standard hire period is one week, which is included in your package price. If you need the crates for longer, we offer affordable weekly extensions which we can calculate for you during our chat."
        },
        {
            question: "What is the Box Protection Plan?",
            answer: "The Box Protection Plan is an optional $20 add-on that provides peace of mind. It covers the standard $20 damage fee for up to three (3) of our moving boxes. Please note it does not cover lost items or damage to other equipment like trolleys. You can read the full details on our Box Protection Plan policy page."
        },
        {
            question: "What happens if I damage or lose equipment?",
            answer: "We understand accidents happen. A fee of $20 per damaged box and $35 per lost box will be charged. For high-value items like trolleys, replacement fees apply. We recommend the Box Protection Plan for minor box damage."
        }
    ],
    "Delivery & Logistics": [
        {
            question: "What areas do you deliver to?",
            answer: "We currently service the Greater Penrith Area. Delivery to our standard service zone is included in the flat $30 delivery/collection fee. If you are just outside this area, message us and we may be able to provide a custom quote."
        },
        {
            question: "What does the delivery fee cover?",
            answer: "Our $30 delivery fee is a flat rate that covers both the drop-off of your equipment at the start of your move and the collection from your address at the end of the rental period."
        },
        {
            question: "What if I'm not home for delivery or collection?",
            answer: "That's fine! As long as there is a safe and accessible place for us to leave or retrieve the equipment (like a porch or garage), you don't need to be home. Just let us know the details in our Messenger chat."
        }
    ],
    "Using the Equipment": [
        {
            question: "Do I need to clean the boxes?",
            answer: "We professionally clean and sanitize every box between uses, so you don't have to worry about a deep clean. We just ask that they are returned empty and free of heavy soil or permanent markers."
        },
        {
            question: "Can I use my own labels?",
            answer: "We provide dedicated space on each box for labels and sell moving sticker packs to keep you organized. Please avoid using strong adhesives or permanent markers directly on the plastic to avoid cleaning fees."
        }
    ]
};

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-headline font-bold text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Everything you need to know about moving with StakIt Hire.
        </p>
      </header>

      <div className="space-y-8">
        {Object.entries(faqSections).map(([sectionTitle, items]) => (
             <Card key={sectionTitle} className="border-none shadow-soft rounded-3xl overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                    <CardTitle className="font-headline text-2xl">{sectionTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                        {items.map((item, index) => (
                            <AccordionItem value={`${sectionTitle}-${index}`} key={index} className="px-6 border-b-primary/5 last:border-0">
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                                    {item.question}
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

      <Card className="text-center bg-primary text-primary-foreground border-none shadow-premium py-12 px-6 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-headline font-bold">Still have questions?</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg mt-2">
                We're here to help you get moving.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
              <Button asChild size="lg" variant="secondary" className="font-bold h-14 px-8">
                  <Link href="/contact">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
