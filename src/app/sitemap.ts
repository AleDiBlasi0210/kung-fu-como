import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kungfucomo.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/discipline/choy-li-fut',
    '/discipline/tai-chi-chuan',
    '/istruttori',
    '/sedi',
    '/attivita',
    '/news',
    '/contatti',
    '/partner',
  ]

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}
