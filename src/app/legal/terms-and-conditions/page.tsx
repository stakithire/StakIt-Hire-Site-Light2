
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Terms and Conditions | StakIt Hire',
};

export default function TandCPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-8 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-headline font-bold text-foreground">
          Terms and Conditions
        </h1>
        <div className="mt-2 text-lg text-muted-foreground">
          <p>Business Name: StakIt Hire</p>
          <p>ABN: 72 970 045 408</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: 11 April 2026
        </p>
      </header>

      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
          <CardTitle>1. Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            By accessing the StakIt Hire website and using our services, you agree to be bound by these Terms and Conditions. These constitute a legally binding agreement between you and StakIt Hire.
          </p>
        </CardContent>
      </Card>

      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
          <CardTitle>2. Booking and Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <ul className="list-disc pl-6 space-y-2">
                <li>All service inquiries and booking confirmations are finalized via our official Facebook Messenger chat.</li>
                <li>Full payment is required prior to the commencement of the rental period.</li>
                <li>Payments are processed securely via a dedicated payment link sent to you by our team.</li>
                <li>We do not store credit card details; all transactions are handled by approved third-party payment processors.</li>
            </ul>
        </CardContent>
      </Card>

      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
            <CardTitle>3. Rental Period and Equipment Care</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>The rental period begins on the day of delivery and ends on the scheduled collection date. Customers are responsible for the safe storage and intended use of all rented equipment (crates, trolleys, blankets) during this time.</p>
            <p>Fees for lost or damaged items apply as per our standard pricing. We recommend the Box Protection Plan to cover minor, accidental box damage.</p>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
            <CardTitle>4. Delivery and Collection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>Our standard $30 flat fee covers both delivery and collection within the Greater Penrith Area. Customers must ensure a safe and accessible area for our team to drop off and pick up the crates.</p>
        </CardContent>
      </Card>
    </div>
  );
}
