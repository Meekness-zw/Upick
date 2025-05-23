/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.upick.co.zw',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    exclude: ['/dashboard/**'],
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    },
    robotsTxtOptions: {
      additionalSitemaps: [],
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/dashboard', '/api'],
        },
      ],
    },
    additionalPaths: async (config) => {
      return [
        {
          loc: 'https://www.upick.co.zw',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.upick.co.zw/about',
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.upick.co.zw/for-services',
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.upick.co.zw/benefits',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.upick.co.zw/services',
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.upick.co.zw/support',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.upick.co.zw/for-business',
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        },
      ]
    },
  }