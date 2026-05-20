import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';

export const Icons = {
  logo: (props: any) => {
    const logoData = placeholderImageData.placeholderImages.find(img => img.id === 'site-logo');
    const logoUrl = logoData?.imageUrl || "https://live.staticflickr.com/65535/55276643036_18fb9e6e82.jpg";

    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={logoUrl}
          alt="StakIt Hire Logo"
          fill
          sizes="(max-width: 768px) 300px, 300px"
          priority
          className="object-contain"
          {...props}
        />
      </div>
    );
  },
};
