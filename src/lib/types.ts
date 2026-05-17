export type PricingBundle = {
  id: string;
  name: string;
  description: string;
  contents: string[];
  price: number;
  followOnPrice: number;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceString?: string;
  hirePrice?: number;
  followOnPrice?: number;
  purchasePrice?: number;
  unit?: string;
  isFrom?: boolean;
  boxCount?: number;
  group?: string;
  sizeOptions?: string[];
};

export type CarouselItem = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
