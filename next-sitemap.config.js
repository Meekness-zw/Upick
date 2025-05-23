/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.upick.co.zw',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: [
        '/api/*',
        '/admin/*',
        '/login',
        '/register',
        '/forgot-password',
        '/reset-password',
        '/dashboard/*',
        '/profile/*',
        '/_*',
        '/404',
        '/500',
    ],
    robotsTxtOptions: {
        additionalSitemaps: [],
        policies: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/about',
                    '/services',
                    '/contact',
                    '/blog/*',
                    '/pricing',
                    '/faq',
                ],
                disallow: [
                    '/api/*',
                    '/admin/*',
                    '/login',
                    '/register',
                    '/forgot-password',
                    '/reset-password',
                    '/dashboard/*',
                    '/profile/*',
                    '/_*',
                    '/404',
                    '/500',
                ],
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/'],
            },
            {
                userAgent: 'ChatGPT-User',
                disallow: ['/'],
            },
            {
                userAgent: 'Google-Extended',
                disallow: ['/'],
            },
            {
                userAgent: 'CCBot',
                disallow: ['/'],
            },
            {
                userAgent: 'anthropic-ai',
                disallow: ['/'],
            },
        ],
    },
    transform: async (config, path) => {
        // Custom transform function to modify sitemap entries
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: path === '/' ? 1.0 : config.priority,
            lastmod: new Date().toISOString(),
        }
    },
};
  