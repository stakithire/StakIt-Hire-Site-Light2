'use client';

import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';

export function SiteLogo({ className }: { className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const logoData = placeholderImageData.placeholderImages.find(img => img.id === 'site-logo');
  const logoUrl = logoData?.imageUrl || "https://live.staticflickr.com/65535/55276643036_18fb9e6e82.jpg";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div className={cn("bg-muted animate-pulse rounded-md", className || "w-40 h-12")} />;
  }

  return (
    <div className={className || "relative w-full h-full min-h-[40px]"}>
      <Image
        src={logoUrl}
        alt="StakIt Hire Logo"
        fill
        priority
        className="object-contain object-left"
        sizes="(max-width: 768px) 160px, 256px"
      />
    </div>
  );
}

// Helper to keep logic clean if cn is needed but not imported
function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}