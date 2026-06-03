import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MessageCircle, Mail } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

/**
 * Ensures all blog posts are pre-rendered at build time.
 * This prevents 404 errors on static hosting platforms.
 */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Disables dynamic generation for routes not in the static params list.
export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | The StakIt Guide`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const renderParagraph = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <article className="container mx-auto max-w-4xl py-12 md:py-24 px-4 space-y-12">
      <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to The StakIt Guide
      </Link>

      <header className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary">
          <span className="bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
          {post.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
          {post.description}
        </p>
      </header>

      <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-premium border-4 border-white">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={post.imageHint}
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        {post.content.map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-3xl font-headline font-bold text-foreground pt-8 pb-2">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }

          if (paragraph.startsWith('* ')) {
            return (
              <ul key={index} className="list-none space-y-2">
                <li className="flex items-start gap-3 text-lg md:text-xl text-muted-foreground">
                  <span className="text-primary font-bold pt-1">•</span>
                  <span>{renderParagraph(paragraph.replace('* ', ''))}</span>
                </li>
              </ul>
            );
          }

          if (paragraph.startsWith('✔ ')) {
             return (
              <div key={index} className="flex items-start gap-3 text-lg md:text-xl text-muted-foreground py-1">
                <span className="text-accent font-bold">✔</span>
                <span>{renderParagraph(paragraph.replace('✔ ', ''))}</span>
              </div>
            );
          }

          return (
            <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {renderParagraph(paragraph)}
            </p>
          );
        })}
      </div>

      <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 mt-20 text-center space-y-8 border border-primary/10 shadow-soft">
        <h2 className="text-3xl md:text-5xl font-headline font-bold">Ready to Move Smarter?</h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Don't settle for cardboard. Secure your high-capacity StakIt Hire kit today and make your next move a breeze.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
          <Button asChild size="lg" className="h-20 px-12 text-2xl font-bold bg-[#6930F7] rounded-2xl shadow-premium transition-transform hover:scale-105">
            <a href="https://www.facebook.com/stakithire" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-8 w-8" />
              Book via Facebook
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-20 px-12 text-2xl font-bold rounded-2xl border-2 shadow-soft transition-transform hover:scale-105">
            <a href="mailto:stakithire@gmail.com">
              <Mail className="mr-3 h-8 w-8" />
              Email Our Team
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
