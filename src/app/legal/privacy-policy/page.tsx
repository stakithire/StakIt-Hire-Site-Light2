
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
        <p className="mt-2 text-lg text-muted-foreground">
          Last updated: 11 April 2026
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>1. Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            StakIt Hire (ABN 72 970 045 408) is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>We collect information necessary to provide our rental services, including name, email, phone number, and delivery address through our Facebook Messenger interaction.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Disclosure of Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>We may disclose your personal information to secure payment providers and delivery logistics partners only as necessary to fulfill your order.</p>
            <p>We do <strong>not sell your personal information</strong> to third parties.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Data Retention</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We retain personal information for as long as necessary for operational or legal purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
