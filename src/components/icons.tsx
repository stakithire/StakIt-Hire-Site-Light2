import Image from 'next/image';
import placeholderImageData from '@/lib/placeholder-images.json';

export const Icons = {
  logo: (props: any) => {
    const logoData = placeholderImageData.placeholderImages.find(img => img.id === 'site-logo');
    const logoUrl = logoData?.imageUrl || "https://live.staticflickr.com/65535/55276643036_18fb9e6e82.jpg";

    return (
      <div className="relative w-full h-full min-h-[40px]">
        <Image
          src={logoUrl}
          alt="StakIt Hire Logo"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 768px) 160px, 256px"
          {...props}
        />
      </div>
    );
  },
};
