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
            table: 'https://www.notion.so/ernestoabreu/98b3b387913648bdaa37053e4eb0127f?v=fe3da1bc9a7f4b1383b45013b6c67ae3',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/ernestoabreu/4b4d610d22024751a11ea4d1b24a9ff8?v=aa3cb693469e44c59ded12505bb886ce',
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
