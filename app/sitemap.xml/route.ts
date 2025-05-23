import { NextResponse } from 'next/server'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export async function GET() {
  const fields: ISitemapField[] = [
    {
      loc: 'https://www.upick.co.zw',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 1,
    },
    {
      loc: 'https://www.upick.co.zw/about',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
    },
    {
      loc: 'https://www.upick.co.zw/for-services',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
    },
    {
      loc: 'https://www.upick.co.zw/benefits',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.8,
    },
    {
      loc: 'https://www.upick.co.zw/services',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
    },
    {
      loc: 'https://www.upick.co.zw/support',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.8,
    },
    {
      loc: 'https://www.upick.co.zw/for-business',
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
    },
  ]

  const sitemap = await getServerSideSitemap(fields)
  const xmlString = await sitemap.text()
  const xml = xmlString.replace('<?xml version="1.0" encoding="UTF-8"?>', 
    '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>')

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 