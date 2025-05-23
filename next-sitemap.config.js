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
                    '/for-services',
                    '/for-business',
                    '/benefits',
                    '/support',
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
        const priorities = {
            '/': 1.0,
            '/about': 0.9,
            '/services': 0.9,
            '/for-services': 0.9,
            '/for-business': 0.9,
            '/benefits': 0.8,
            '/support': 0.8,
            '/contact': 0.8,
            '/blog': 0.7,
            '/pricing': 0.8,
            '/faq': 0.7,
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: priorities[path] || config.priority,
            lastmod: new Date().toISOString(),
        }
    },
};
  