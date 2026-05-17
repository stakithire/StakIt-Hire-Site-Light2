
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

      <Card>
        <CardHeader>
          <CardTitle>1. Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            By accessing the StakIt Hire website and using our services, you agree to be bound by these Terms and Conditions. These constitute a legally binding agreement between you and StakIt Hire.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Quotes and Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <ul className="list-disc pl-6 space-y-2">
                <li>Quotes are finalized via Facebook Messenger conversation.</li>
                <li>Full payment is required prior to rental commencement.</li>
                <li>Payments are processed via secure approved third-party providers.</li>
            </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>3. Rental Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>Customers are responsible for the safe and intended use of all rented equipment during the hire period.</p>
            <p>Fees apply for lost or damaged equipment as outlined in our pricing documentation.</p>
        </CardContent>
      </Card>
    </div>
  );
}
