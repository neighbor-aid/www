module.exports = {
  siteMetadata: {
    title: `Neighbor Aid`,
    description: `A web app that helps local communities stand in financial solidarity with each other in times of crisis by making it easy to exchange money between people.`,
    author: `@neighboraidco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neighboraid.co`,
        short_name: `neibraid.co`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      },
    },
    `gatsby-plugin-offline`,
  ],
}
