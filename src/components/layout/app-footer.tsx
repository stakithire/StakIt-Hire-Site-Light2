'use client';

import Link from 'next/link';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export function AppFooter() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Brand/Location Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="text-sm font-bold text-foreground uppercase tracking-widest">{BUSINESS_CONFIG.name}</p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{BUSINESS_CONFIG.serviceArea}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              ABN: {BUSINESS_CONFIG.abn}
            </p>
          </div>

          {/* Social/CTA Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-6">
              <a 
                href={BUSINESS_CONFIG.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={`tel:${BUSINESS_CONFIG.phone.replace(/\s/g, '')}`}
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Call us"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Email us"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm font-medium text-muted-foreground italic">
              "Pack. Stack. Move."
            </p>
          </div>

          {/* Legal Links Section */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <Link href="/faq" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-tighter">
                    FAQ
                </Link>
                <Link href="/legal/damage-waiver" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-tighter">
                    Protection Plan
                </Link>
                <Link href="/legal/privacy-policy" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-tighter">
                    Privacy
                </Link>
                <Link href="/legal/terms-and-conditions" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-tighter">
                    Terms
                </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {BUSINESS_CONFIG.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
