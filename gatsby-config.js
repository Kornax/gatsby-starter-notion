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
            table: 'https://www.notion.so/ernestoabreu/b219a65c05c54100bf056d16ae61a383?v=d1117b9c0d624d1a89771c09f6a48e5b',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/4ae9328e650945eb9adbd882b3b453d3?v=0966bdbd0645437cbcc62e6a933e241c',
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
