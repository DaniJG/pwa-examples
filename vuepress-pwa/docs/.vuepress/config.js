module.exports = {
  title: 'My awesome project',
  description: 'Documentation for my awesome project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
    ]
  },
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  plugins: ['@vuepress/pwa'],
  // for testing deployment to sample github pages repo
  base: '/vuepress-example/'
}