import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { BackToTopButton } from '@/components/layout/back-to-top-button';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'StakIt Hire | Boxes That Don\'t Quit',
  description: 'Revolutionizing the moving process with durable, stackable rental crates delivered to your door. Greater Penrith Area.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
        )}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8TN3DES2Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z8TN3DES2Z');
          `}
        </Script>
        <div 
          className="fixed inset-0 z-0 bg-center bg-no-repeat opacity-[0.15] pointer-events-none" 
          style={{ backgroundImage: 'url(/watermark.png)', backgroundSize: '40%' }}
        />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <AppHeader />
          <main className="flex-1">
            {children}
          </main>
          <AppFooter />
        </div>
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
