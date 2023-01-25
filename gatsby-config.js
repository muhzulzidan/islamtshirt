const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `islamtshirt`,
    description: `We want to spread dakwah with T-shirt`,
    author: `@islamtshirt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-layout`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `islamtshirt`,
        short_name: `islamtshirt`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-shopify`,
    //   options: {
    //     password: process.env.SHOPIFY_ADMIN_PASSWORD,
    //     storeUrl: process.env.SHOPIFY_STORE_URL,
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId:
          // "3169340789952718", 
          "363630142130463",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5W79T2F",
        includeInDevelopment: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "AW-301837594",
          // "G-S4T9HXCRZY",
        ],
        pluginConfig: {
          head: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["", ""],
        },
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://islamtshirt.us5.list-manage.com/subscribe/post?u=ac156967a82dbb399c1dcfe94&amp;id=ace8e65a23',
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
