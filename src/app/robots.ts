import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/profile/', '/tracking/'],
    },
    sitemap: 'https://stakithire.com.au/sitemap.xml',
  };
}
