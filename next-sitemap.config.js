/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.upick.co.zw',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    exclude: ['/dashboard/**'],
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
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
  }