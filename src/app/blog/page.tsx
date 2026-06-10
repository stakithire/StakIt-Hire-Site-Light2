import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export const metadata: Metadata = {
  title: 'The StakIt Journal | Moving Tips & Insights',
  description: 'Expert advice, packing guides, and local Penrith moving stories to help you pack, stack, and move with ease.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 md:py-24 px-4 space-y-16">
      <header className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground tracking-tight">
          The StakIt Journal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Smarter packing tips and local stories to make your next move your best move.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <Card className="border-none shadow-soft hover:shadow-premium transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={post.imageHint}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <CardTitle className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-primary/5 border-none rounded-3xl p-10 text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-headline font-bold">Never Miss a Tip</CardTitle>
          <CardDescription className="text-lg">
            Follow us on Facebook for the latest moving hacks and local Penrith updates.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Button asChild size="lg" className="rounded-2xl h-14 px-10 text-lg font-bold shadow-soft">
            <a href={BUSINESS_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
              Follow Our Facebook Page
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
