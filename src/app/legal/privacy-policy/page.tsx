import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-12 md:py-24">
      <header className="text-center space-y-6">
        <h1 className="text-4xl font-headline font-bold text-foreground tracking-tighter sm:text-5xl md:text-6xl">
          Privacy Policy
        </h1>
        <div className="text-lg text-muted-foreground space-y-1">
          <p>Business Name: StakIt Hire</p>
          <p>ABN: 72 970 045 408</p>
          <p>Last Updated: 30 May 2026</p>
        </div>
      </header>

      <section className="space-y-8">
        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              StakIt Hire respects your privacy and is committed to protecting your personal information.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store and disclose personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8 text-muted-foreground text-lg leading-relaxed">
            <p>We may collect information including:</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Personal Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Delivery address</li>
                  <li>Collection address</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Booking Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Booking details</li>
                  <li>Rental history</li>
                  <li>Equipment hired</li>
                  <li>Delivery and collection records</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Transaction Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment confirmation information</li>
                  <li>Invoice records</li>
                  <li>Order history</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Visual Records</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Delivery photographs</li>
                  <li>Collection photographs</li>
                  <li>Damage photographs</li>
                  <li>Video recordings where applicable</li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
               <h4 className="font-bold text-foreground">Technical Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address, Device info, Browser info</li>
                  <li>Website usage data, Cookies and analytics data</li>
                </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">3. Visual Records (Photo and Video Evidence)</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              StakIt Hire may collect photographs or video recordings at delivery and collection. These records may incidentally capture surrounding property, equipment placement and collection conditions.
            </p>
            <p className="font-semibold text-foreground">Visual records are collected for purposes including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verifying equipment condition</li>
              <li>Confirming delivery and collection</li>
              <li>Supporting damage assessments</li>
              <li>Supporting missing inventory claims</li>
              <li>Preventing fraud and resolving disputes</li>
            </ul>
            <p className="pt-4">Visual records are stored securely and accessed only where reasonably necessary for operational, legal or dispute-resolution purposes.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">4. How We Use Information</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>We may use personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process bookings and deliver/collect equipment</li>
              <li>Manage customer accounts and process payments</li>
              <li>Communicate with customers and verify identity</li>
              <li>Assess damage or missing inventory claims</li>
              <li>Resolve disputes and improve our services</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">5. Disclosure of Information</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>We do not sell personal information. We may disclose information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors and technology service providers</li>
              <li>Cloud storage providers and professional advisers</li>
              <li>Government authorities where required by law</li>
              <li>Courts, tribunals or dispute-resolution bodies where necessary</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">6. Storage of Information</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Information may be stored using secure third-party platforms including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Workspace (Forms, Sheets, Drive)</li>
              <li>Website hosting and payment processing providers</li>
            </ul>
            <p className="pt-4">Reasonable steps are taken to protect information from misuse, interference, loss, unauthorised access, modification or disclosure.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">7. Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Personal information is retained only for as long as reasonably necessary to provide services, maintain records, resolve disputes, and meet legal/taxation obligations. Certain records may be retained for up to seven (7) years.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">8. Cookies and Analytics</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Our website may use cookies and analytics tools to improve performance and understand usage. You may disable cookies through your browser settings, although some website functions may be affected.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">9. Access and Correction</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>You may request access to, or correction of, your personal information by contacting us at <span className="font-bold text-primary">stakithire@gmail.com</span>.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">10. Complaints</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>If you believe your privacy has been breached, please contact us first so we can attempt to resolve the issue. If unsatisfied, you may contact the Office of the Australian Information Commissioner (OAIC).</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">11. Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>We may update this Privacy Policy from time to time. The most current version will be published on our website.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">12. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p className="font-bold text-foreground">StakIt Hire</p>
            <p>Email: stakithire@gmail.com</p>
            <p>ABN: 72 970 045 408</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
