'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { format, differenceInDays, addDays } from 'date-fns';
import { 
  Calendar as CalendarIcon, 
  Minus, 
  Plus, 
  MessageCircle, 
  Truck, 
  Calculator, 
  CheckCircle2,
  Box,
  ShieldCheck,
  Package,
  Sparkles,
  Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  boxHireServices, 
  services, 
  protectionAddOns, 
  tvProtectionAddOns,
  pricingBundles 
} from '@/lib/data';

const MESSENGER_URL = "https://m.me/stakithire";

export default function QuoteCalculatorPage() {
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(() => addDays(new Date(), 7));
  const [collectionDate, setCollectionDate] = useState<Date | undefined>(() => addDays(new Date(), 14));
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [options, setOptions] = useState<Record<string, 'hire' | 'purchase'>>({});

  useEffect(() => {
    const initialOptions: Record<string, 'hire' | 'purchase'> = {};
    [...protectionAddOns, ...tvProtectionAddOns].forEach(item => {
      if (item.hirePrice && item.purchasePrice) {
        initialOptions[item.id] = 'hire';
      }
    });
    setOptions(initialOptions);
  }, []);

  const hireDurationDays = useMemo(() => {
    if (!deliveryDate || !collectionDate) return 0;
    const days = differenceInDays(collectionDate, deliveryDate);
    return Math.max(0, days);
  }, [deliveryDate, collectionDate]);

  const hireWeeks = useMemo(() => {
    if (hireDurationDays <= 0) return 0;
    return Math.ceil(hireDurationDays / 7);
  }, [hireDurationDays]);

  const extraWeeks = useMemo(() => {
    return Math.max(0, hireWeeks - 1);
  }, [hireWeeks]);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const toggleOption = (id: string, mode: 'hire' | 'purchase') => {
    setOptions(prev => ({ ...prev, [id]: mode }));
  };

  const allItems = useMemo(() => [
    ...pricingBundles.map(b => ({ ...b, hirePrice: b.price })),
    ...boxHireServices,
    ...services,
    ...protectionAddOns,
    ...tvProtectionAddOns
  ], []);

  const cart = useMemo(() => {
    return allItems.filter(item => (quantities[item.id] || 0) > 0).map(item => {
      const qty = quantities[item.id];
      const mode = options[item.id] || 'hire';
      
      let unitPrice = 0;
      let extraWeekTotal = 0;

      if (mode === 'purchase' && 'purchasePrice' in item && item.purchasePrice) {
        unitPrice = item.purchasePrice;
      } else if ('hirePrice' in item && item.hirePrice !== undefined) {
        unitPrice = item.hirePrice;
        if ('followOnPrice' in item && item.followOnPrice !== undefined && extraWeeks > 0) {
          extraWeekTotal = item.followOnPrice * extraWeeks;
        }
      } else if ('price' in item && item.price !== undefined) {
        unitPrice = item.price;
      }

      const total = (unitPrice + extraWeekTotal) * qty;

      return {
        ...item,
        qty,
        mode,
        unitPrice,
        extraWeekTotal,
        total
      };
    });
  }, [quantities, options, extraWeeks, allItems]);

  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = subtotal > 0 ? 30 : 0;
  const grandTotal = subtotal + deliveryFee;

  const generateMessengerLink = () => {
    const itemsText = cart.map(item => `- ${item.qty}x ${item.name} (${item.mode === 'purchase' ? 'Purchase' : 'Hire'})`).join('%0A');
    const dateText = deliveryDate && collectionDate 
      ? `Delivery: ${format(deliveryDate, 'PPP')}%0ACollection: ${format(collectionDate, 'PPP')} (${hireWeeks} weeks total)`
      : 'Dates: To be discussed';
    
    const message = `Hi StakIt Hire! I've used your quote calculator and would like to check availability for:%0A%0A${itemsText}%0A%0A${dateText}%0A%0AEstimated Total: $${grandTotal.toFixed(2)}`;
    
    return `${MESSENGER_URL}?text=${message}`;
  };

  const generateEmailLink = () => {
    const itemsText = cart.map(item => `- ${item.qty}x ${item.name} (${item.mode === 'purchase' ? 'Purchase' : 'Hire'})`).join('%0A');
    const dateText = deliveryDate && collectionDate 
      ? `Delivery: ${format(deliveryDate, 'PPP')}%0ACollection: ${format(collectionDate, 'PPP')} (${hireWeeks} weeks total)`
      : 'Dates: To be discussed';
    
    const subject = encodeURIComponent("Quote Request from StakIt Hire Calculator");
    const body = `Hi StakIt Hire!%0A%0AI've used your quote calculator and would like to check availability for:%0A%0A${itemsText}%0A%0A${dateText}%0A%0AEstimated Total: $${grandTotal.toFixed(2)}%0A%0AMy delivery address is:%0A[Please enter address here]`;
    
    return `mailto:stakithire@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground tracking-tight">
          Quote Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Build your move, select your dates, and get an instant estimate for your crate hire.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-soft rounded-3xl overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 v-5 text-primary" />
                1. Select Your Dates
              </CardTitle>
              <CardDescription>We offer flexible hire periods. Prices below automatically adjust for extra weeks.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal rounded-xl h-12", !deliveryDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {deliveryDate ? format(deliveryDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={deliveryDate} onSelect={setDeliveryDate} initialFocus disabled={(date) => date < new Date()} />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Collection Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal rounded-xl h-12", !collectionDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {collectionDate ? format(collectionDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={collectionDate} onSelect={setCollectionDate} initialFocus disabled={(date) => deliveryDate ? date <= deliveryDate : date < new Date()} />
                  </PopoverContent>
                </Popover>
              </div>
              {hireWeeks > 0 && (
                <div className="sm:col-span-2 bg-accent/10 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/20 p-2 rounded-lg">
                      <Truck className="h-5 v-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-accent-foreground">{hireDurationDays} Days Total</p>
                      <p className="text-sm text-muted-foreground">{hireWeeks} Week Hire ({extraWeeks} Extra Weeks)</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-6 v-6 text-accent" />
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="kits" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-14 bg-muted/50 p-1 rounded-2xl">
              <TabsTrigger value="kits" className="rounded-xl font-bold">Kits</TabsTrigger>
              <TabsTrigger value="crates" className="rounded-xl font-bold">Crates</TabsTrigger>
              <TabsTrigger value="protection" className="rounded-xl font-bold">Protection</TabsTrigger>
              <TabsTrigger value="supplies" className="rounded-xl font-bold">Supplies</TabsTrigger>
            </TabsList>

            <TabsContent value="kits" className="mt-6 space-y-4">
              <div className="bg-primary/5 p-4 rounded-2xl mb-4 border border-primary/10">
                <p className="text-sm text-primary font-medium flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Kits include your first week of hire and essential supplies.
                </p>
              </div>
              {pricingBundles.map(item => (
                <ItemRow 
                  key={item.id} 
                  item={{...item, hirePrice: item.price}} 
                  qty={quantities[item.id] || 0} 
                  onUpdate={updateQuantity} 
                  extraWeeks={extraWeeks} 
                />
              ))}
            </TabsContent>

            <TabsContent value="crates" className="mt-6 space-y-4">
              {boxHireServices.map(item => (
                <ItemRow key={item.id} item={item} qty={quantities[item.id] || 0} onUpdate={updateQuantity} extraWeeks={extraWeeks} />
              ))}
            </TabsContent>

            <TabsContent value="protection" className="mt-6 space-y-4">
               {[...protectionAddOns, ...tvProtectionAddOns].map(item => (
                <ItemRow 
                  key={item.id} 
                  item={item} 
                  qty={quantities[item.id] || 0} 
                  onUpdate={updateQuantity} 
                  extraWeeks={extraWeeks}
                  mode={options[item.id]}
                  onToggleMode={toggleOption}
                />
              ))}
            </TabsContent>

            <TabsContent value="supplies" className="mt-6 space-y-4">
              {services.map(item => (
                <ItemRow key={item.id} item={item} qty={quantities[item.id] || 0} onUpdate={updateQuantity} extraWeeks={extraWeeks} />
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-premium rounded-3xl sticky top-28">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 v-5 text-primary" />
                Quote Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-8 space-y-3">
                    <Package className="h-12 w-12 text-muted-foreground/30 mx-auto" />
                    <p className="text-muted-foreground">Your quote is currently empty. Start adding items to see an estimate.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex justify-between items-start gap-4 text-sm">
                      <div className="space-y-0.5">
                        <p className="font-bold text-foreground">{item.qty}x {item.name}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.mode === 'purchase' ? 'Purchase' : `Hire - ${hireWeeks} Wk`}
                        </p>
                      </div>
                      <p className="font-bold">${item.total.toFixed(2)}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 bg-muted/30 border-t space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery & Collection</span>
                    <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-center text-muted-foreground italic leading-tight px-4">
                    $30 delivery is only for local approved suburbs. Other locations are subject to an additional fee.
                  </p>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2 border-t border-muted">
                  <span>Total</span>
                  <span className="text-primary">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 flex flex-col gap-4">
               <Button asChild size="lg" className="w-full h-14 rounded-2xl font-bold text-lg bg-[#6930F7]" disabled={cart.length === 0}>
                  <a href={generateMessengerLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via Facebook
                  </a>
               </Button>
               <Button asChild size="lg" className="w-full h-14 rounded-2xl font-bold text-lg bg-accent text-accent-foreground border-none shadow-soft hover:bg-accent/90 transition-colors" disabled={cart.length === 0}>
                  <a href={generateEmailLink()}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email Our Team
                  </a>
               </Button>
               <p className="text-[10px] text-center text-muted-foreground px-4 uppercase tracking-widest leading-relaxed">
                 Prices are estimates only. Final quote and availability will be confirmed by our team.
               </p>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-soft rounded-3xl bg-accent/5">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-headline font-bold flex items-center gap-2">
                <ShieldCheck className="h-5 v-5 text-accent" />
                Why use StakIt?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                  No cardboard waste or mess
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                  Industrial-strength 100L crates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                  Flat $30 delivery zone
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ItemRow({ 
  item, 
  qty, 
  onUpdate, 
  extraWeeks, 
  mode, 
  onToggleMode 
}: { 
  item: any; 
  qty: number; 
  onUpdate: (id: string, delta: number) => void;
  extraWeeks: number;
  mode?: 'hire' | 'purchase';
  onToggleMode?: (id: string, mode: 'hire' | 'purchase') => void;
}) {
  const showModeToggle = onToggleMode && item.hirePrice && item.purchasePrice;
  const currentPrice = mode === 'purchase' ? item.purchasePrice : (item.hirePrice || item.price);
  const extraPrice = (mode === 'hire' || !mode) ? (item.followOnPrice || 0) : 0;

  return (
    <Card className={cn("border-none shadow-soft rounded-2xl transition-all duration-300", qty > 0 ? "ring-2 ring-primary/20 bg-primary/5" : "bg-white")}>
      <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 flex-1 w-full">
          <div className={cn("p-3 rounded-xl", qty > 0 ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
            {item.contents ? <Package className="h-6 w-6" /> : <Box className="h-6 w-6" />}
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
            <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
            <div className="flex items-center gap-3 pt-1">
              <span className="text-sm font-bold text-primary">
                ${currentPrice?.toFixed(2)} 
                <span className="text-xs font-normal text-muted-foreground">
                   {mode === 'purchase' ? ' (Purchase)' : ' (Week 1)'}
                </span>
              </span>
              {extraPrice > 0 && extraWeeks > 0 && (
                <span className="text-xs font-medium text-accent">
                  + ${extraPrice.toFixed(2)} x {extraWeeks} Wks
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
          {showModeToggle && (
            <div className="flex bg-muted p-1 rounded-lg self-start sm:self-auto">
              <button 
                onClick={() => onToggleMode(item.id, 'hire')}
                className={cn("px-3 py-1 text-xs font-bold rounded-md transition-all", mode === 'hire' ? "bg-white shadow-sm text-primary" : "text-muted-foreground")}
              >
                Hire
              </button>
              <button 
                onClick={() => onToggleMode(item.id, 'purchase')}
                className={cn("px-3 py-1 text-xs font-bold rounded-md transition-all", mode === 'purchase' ? "bg-white shadow-sm text-primary" : "text-muted-foreground")}
              >
                Buy
              </button>
            </div>
          )}
          
          <div className="flex items-center gap-4 bg-muted/50 p-1 rounded-xl self-end">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-lg hover:bg-white hover:text-primary transition-colors"
              onClick={() => onUpdate(item.id, -1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-bold text-lg">{qty}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-lg hover:bg-white hover:text-primary transition-colors"
              onClick={() => onUpdate(item.id, 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
