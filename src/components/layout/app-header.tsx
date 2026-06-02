'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing & Kits' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'The StakIt Guide' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const FACEBOOK_PAGE_URL = "https://www.facebook.com/stakithire";

export function AppHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-8">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link href="/" className="relative block h-16 w-48 md:h-20 md:w-64 transition-transform hover:scale-105 active:scale-95">
            <Icons.logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold tracking-tight uppercase transition-colors hover:text-primary",
                  pathname === item.href || (item.href === '/blog' && pathname.startsWith('/blog')) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="bg-[#6930F7] hover:bg-[#6930F7]/90 px-8 h-12 text-md font-bold shadow-soft hover:shadow-premium transition-all">
            <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on FB
            </a>
          </Button>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="lg:hidden flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 text-primary hover:bg-primary/10">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link href="/" onClick={() => setOpen(false)} className="h-16 w-48 relative block">
                    <Icons.logo />
                </Link>
              </SheetHeader>
              <div className="flex flex-col h-[calc(100vh-100px)] py-6 px-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-xl font-bold tracking-tight p-4 rounded-xl transition-all",
                        pathname === item.href || (item.href === '/blog' && pathname.startsWith('/blog'))
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full bg-[#6930F7] h-16 text-lg font-bold shadow-premium" onClick={() => setOpen(false)}>
                    <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Book via Facebook
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
