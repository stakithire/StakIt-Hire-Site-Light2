import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stakithire.com.au';

  // Core static pages
  const routes = [
    '',
    '/pricing',
    '/about',
    '/blog',
    '/faq',
    '/contact',
    '/legal/damage-waiver',
    '/legal/privacy-policy',
    '/legal/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Journal articles
  const journalPosts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...journalPosts];
}
