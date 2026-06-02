import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-12 md:py-24">
      <header className="text-center space-y-6">
        <h1 className="text-4xl font-headline font-bold text-foreground tracking-tighter sm:text-5xl md:text-6xl">
          Box Protection Plan
        </h1>
        <div className="text-lg text-muted-foreground space-y-1">
          <p>Business Name: StakIt Hire</p>
          <p>ABN: 72 970 045 408</p>
          <p>Last Updated: 30 May 2026</p>
          <p className="font-bold text-primary pt-2">Plan Fee: $20.00 (Flat Fee Per Booking)</p>
        </div>
      </header>

      <section className="space-y-8">
        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">1. Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              The Box Protection Plan is an optional add-on available to customers hiring StakIt Hire moving crates.
            </p>
            <p>
              The plan is designed to provide peace of mind by covering the standard damage fee for a limited number of crates that sustain accidental damage during the rental period.
            </p>
            <p>
              The Box Protection Plan is not insurance and does not cover all forms of damage, loss or misuse.
            </p>
          </CardContent>
        </Card>

        {/* Section 2: Green Background */}
        <Card className="border-none shadow-soft rounded-3xl overflow-hidden bg-accent/10">
          <CardHeader className="bg-accent/10 border-b border-accent/20">
            <CardTitle className="font-headline text-2xl text-accent-foreground">2. What Is Covered</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Where the Box Protection Plan has been purchased, StakIt Hire will waive the standard $20.00 damage fee for up to three (3) individual moving crates that sustain accidental damage during the rental period.
            </p>
            <p className="font-semibold text-foreground">Examples of covered accidental damage may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Small cracks or chips in the plastic.</li>
              <li>Deep scuffs or scratches from normal moving activities.</li>
              <li>Minor damage to lids, hinges or handles.</li>
              <li>Other similar accidental damage assessed by StakIt Hire as repairable.</li>
            </ul>
            <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 mt-6">
              <p className="font-bold text-foreground mb-2">Example Scenario:</p>
              <ul className="space-y-1">
                <li>• 2 damaged crates = $0 charge.</li>
                <li>• 3 damaged crates = $0 charge.</li>
                <li>• 5 damaged crates = $40 charge (2 chargeable crates × $20).</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        {/* Section 3: Red Background */}
        <Card className="border-none shadow-soft rounded-3xl overflow-hidden bg-destructive/10">
          <CardHeader className="bg-destructive/5 border-b border-destructive/10">
            <CardTitle className="font-headline text-2xl text-destructive">3. What Is Not Covered</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8 text-muted-foreground text-lg leading-relaxed">
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Loss or Theft</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lost, missing, stolen, or unreturned crates.</li>
              </ul>
              <p className="text-sm italic">Standard recovery charges ($35 per box) apply.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Catastrophic or Severe Damage</h4>
              <p>The plan does not cover crates that are:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Destroyed, melted, or deliberately damaged.</li>
                <li>Damaged through misuse, abuse or negligence.</li>
                <li>Damaged beyond economical repair.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Non-Crate Equipment</h4>
              <p>The Box Protection Plan does not cover:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Hand trolleys, Stair climbers, Moving blankets, Mattress protectors, TV protectors, or Cool boxes.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">4. Assessment Process</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>All equipment is inspected upon collection. Where damage is identified:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Equipment is inspected by the StakIt Hire logistics team.</li>
              <li>Photographs and supporting evidence are collected.</li>
              <li>The Box Protection Plan is applied automatically to eligible items.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">5. Relationship With Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>This Box Protection Plan forms part of the StakIt Hire Terms and Conditions. In the event of any inconsistency, the StakIt Hire Terms and Conditions will prevail. Nothing in this plan excludes or limits any rights available under the Australian Consumer Law.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
