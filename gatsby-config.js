module.exports = {
  siteMetadata: {
    title: `Neighbor Aid`,
    description: `Helping local communities stand in financial solidarity with each other in times of crisis.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neighbor Aid Website`,
        short_name: `neibraid.co`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
