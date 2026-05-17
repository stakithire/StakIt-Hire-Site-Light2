import Image from 'next/image';

export const Icons = {
  logo: (props: any) => (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src="/logo.png?v=1"
        alt="StakIt Hire Logo"
        fill
        sizes="(max-width: 768px) 300px, 300px"
        priority
        className="object-contain"
        {...props}
      />
    </div>
  ),
};