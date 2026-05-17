import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-headline font-bold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        We couldn&apos;t find the page you were looking for. This may be because the system has been updated.
      </p>
      <Button asChild size="lg" className="bg-[#6930F7]">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
