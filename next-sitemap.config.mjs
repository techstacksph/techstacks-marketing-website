/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://techstacksph.com/',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://techstacksph.com/server-sitemap.xml'],
  },
};
