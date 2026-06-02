
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-12 md:py-24">
      <header className="text-center space-y-6">
        <h1 className="text-4xl font-headline font-bold text-foreground tracking-tighter sm:text-5xl md:text-6xl">
          Terms and Conditions
        </h1>
        <div className="text-lg text-muted-foreground space-y-1">
          <p>Business Name: StakIt Hire</p>
          <p>ABN: 72 970 045 408</p>
          <p>Effective Date: 30 May 2026</p>
        </div>
      </header>

      <section className="space-y-8">
        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">1. Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              By placing a booking, accessing our website, purchasing products, or hiring equipment from StakIt Hire, you agree to be bound by these Terms and Conditions.
            </p>
            <p>
              These Terms and Conditions constitute a legally binding agreement between StakIt Hire ("we", "us", "our") and the customer ("you", "your").
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">2. Services Provided</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>StakIt Hire provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rental of reusable moving crates and moving equipment.</li>
              <li>Rental of accessories including trolleys, moving blankets, mattress protectors, TV protectors, cool boxes and related equipment.</li>
              <li>Sale of consumable products including bubble wrap, packing paper, packing tape and other packing supplies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">3. Bookings and Payment</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>All bookings are subject to equipment availability. A booking is not confirmed until accepted by StakIt Hire. Payment may be required before delivery or collection.</p>
            <p className="font-bold text-foreground">Accepted Payment Methods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure payment links (Credit/Debit Card).</li>
              <li>Direct Bank Transfer.</li>
            </ul>
            <p>Where bank transfer is used, funds must be cleared in our account prior to the confirmation of the order and scheduling of delivery.</p>
            <p className="font-bold text-foreground mt-4">We may refuse or cancel a booking where:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Equipment is unavailable.</li>
              <li>Payment has not been received or cleared.</li>
              <li>Delivery conditions are unsafe.</li>
              <li>Fraudulent or misleading information has been provided.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">4. Rental Period</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>The rental period begins when equipment is delivered to the customer or collected by the customer.</p>
            <p>The rental period ends when the equipment is returned to StakIt Hire or collected by StakIt Hire.</p>
            <p>Rental periods may be extended subject to availability and additional charges.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">5. Delivery and Collection</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <div>
              <h4 className="font-bold text-foreground mb-2">Access</h4>
              <p>Customers must provide safe, clear and reasonable access to the delivery and collection location.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Authorised Recipient</h4>
              <p>A person aged 18 years or older must be present at the delivery and collection address to accept or return the equipment. This person is deemed authorised to represent the customer and sign off on equipment counts and condition.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Failed Delivery or Collection</h4>
              <p>If delivery or collection cannot be completed due to customer action or inaction (including the absence of a suitable adult), additional fees may apply. Re-delivery or re-collection fees may range from $30 to $80 depending on location and circumstances.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Waiting Fees</h4>
              <p>Where our team is delayed by the customer, a waiting fee of $25 per 30 minutes may apply.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Collection Readiness</h4>
              <p>Customers must ensure all hired equipment is available, accessible and ready for collection at the agreed collection time. If equipment is not available for collection, the hire period may automatically continue and additional rental charges may apply.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">6. Equipment Use and Care</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Customers agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use equipment only for its intended purpose.</li>
              <li>Exercise reasonable care while equipment is in their possession.</li>
              <li>Not alter, modify, repair or tamper with equipment.</li>
              <li>Store equipment securely and protect it from theft, loss or damage.</li>
              <li>Return equipment empty and in a reasonably clean condition.</li>
            </ul>
            <p>Customers remain responsible for all hired equipment until it is returned to or collected by StakIt Hire.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">7. Damage, Loss and Recovery Charges</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>Customers are responsible for all equipment supplied under the booking until returned to StakIt Hire. StakIt Hire may rely on delivery records, collection records, inventory counts, photographs, video recordings and customer communications when assessing damage, loss or missing equipment.</p>
            
            <div>
              <h4 className="font-bold text-foreground mb-2">Moving Crates</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Damaged crate: $20 per crate.</li>
                <li>Lost, missing, stolen or unreturned crate: $35 per crate.</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-foreground mb-2">Box Protection Plan</h4>
              <p>Where the Box Protection Plan has been purchased, accidental damage to up to three (3) crates during the rental period will be covered by the plan.</p>
              <p className="mt-2 text-sm">The Box Protection Plan does not cover: Lost crates, Missing crates, Stolen crates, Unreturned crates, Intentional damage, Trolleys, Moving blankets, Mattress protectors, TV protectors, Cool boxes, or Any non-crate equipment.</p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">Trolleys</h4>
              <p>Damage to hand trolleys, stair climber trolleys or similar equipment may incur repair or replacement charges ranging from $150 to $250 depending on the nature and extent of the damage.</p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">Other Equipment</h4>
              <p>Moving blankets, mattress protectors, TV protectors, cool boxes and other rental equipment may incur reasonable repair costs or full replacement value where damaged, lost, stolen or not returned. Where repair is possible, repair costs may be charged instead of replacement costs.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">8. Photo Evidence and Consent</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>We may take photographs or video recordings of equipment, inventory quantities and equipment condition at delivery and collection.</p>
            <p>Customers acknowledge that delivery photographs, collection photographs, inventory counts, booking records, electronic communications and customer acknowledgements may be relied upon by StakIt Hire when determining delivery, collection, condition, and inventory counts.</p>
            <p>By using our services, customers consent to the collection and use of such evidence for operational, administrative and dispute resolution purposes.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">9. Reporting Pre-Existing Damage</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Customers must inspect equipment upon delivery. Any pre-existing damage or concerns must be reported within 12 hours of delivery. If no report is made within that period, equipment will be deemed to have been received in good condition, subject to any rights available under Australian Consumer Law.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">10. Extensions and Late Returns</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Extensions are subject to availability. Customers must request extensions before the scheduled collection date where possible. If equipment is not available for collection at the agreed time, the hire period may automatically continue and additional rental charges may apply.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">11. Cancellations and Refunds</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Cancellation requests must be submitted prior to delivery. Bookings cancelled more than 48 hours before delivery may be eligible for a full refund. Bookings cancelled within 48 hours of delivery may incur reasonable administrative, scheduling or delivery-related costs of up to 50% of the total booking price.</p>
            <p>Nothing in this section limits any rights available under the Australian Consumer Law.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">12. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>To the extent permitted by law, StakIt Hire is not liable for indirect, incidental, consequential or special loss arising from the use of rented equipment. Nothing in these Terms and Conditions excludes liability that cannot legally be excluded under Australian law.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">13. Privacy</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Customer information is collected, stored and handled in accordance with our Privacy Policy. Information is used for booking administration, customer service, dispute resolution and business operations.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">14. Australian Consumer Law</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Nothing in these Terms and Conditions excludes, restricts or modifies any rights or remedies available under the Australian Consumer Law. Where consumer guarantees apply under the Australian Consumer Law, those guarantees continue to apply.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="font-headline text-2xl">15. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>These Terms and Conditions are governed by the laws of New South Wales, Australia. Any disputes arising in connection with these Terms and Conditions will be subject to the jurisdiction of the courts of New South Wales.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
