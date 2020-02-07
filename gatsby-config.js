module.exports = {
  siteMetadata: {
    title: `Gatsby ❤️ Notion`,
    description: `build site with gatsby & notion`,
    author: `@mayneyao`,
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/ernestoabreu/1d8ef6dee57747ba96fa0d14f270a8ba?v=429278bba81945529218afa9fa08e326',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/ernestoabreu/b0aaca8f28714155ade2eae5b0a88600?v=9030fa1c7bf3447a9e8874e2b6e1fbf0',
            cacheType: 'static'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-notion`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
