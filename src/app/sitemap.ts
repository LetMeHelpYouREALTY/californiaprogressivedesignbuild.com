import type { MetadataRoute } from 'next'
import { getAllPageSlugs } from '@/config/page-content'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllPageSlugs()
  const now = new Date()

  return [
    { url: siteConfig.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...slugs.map((slug) => ({
      url: `${siteConfig.url}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
