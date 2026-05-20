
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy | StakIt Hire',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-8 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-headline font-bold text-foreground">
          Privacy Policy
        </h1>
        <div className="mt-2 text-lg text-muted-foreground">
          <p>Business Name: StakIt Hire</p>
          <p>ABN: 72 970 045 408</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: 11 April 2026
        </p>
      </header>

      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
          <CardTitle>1. Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            StakIt Hire is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth).
          </p>
        </CardContent>
      </Card>

      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
          <CardTitle>2. Information Collection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>We collect personal information necessary to provide our moving crate rental services, including your name, delivery address, phone number, and email. This information is primarily collected through our interaction with you on Facebook Messenger.</p>
        </CardContent>
      </Card>

      <Card className="border-none shadow-soft rounded-3xl">
        <CardHeader>
          <CardTitle>3. Use of Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>Your details are used solely for fulfilling your order, coordinating delivery and collection, and providing customer support. We disclose your information only to secure payment providers and logistics partners as necessary.</p>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>
        </CardContent>
      </Card>
    </div>
  );
}
