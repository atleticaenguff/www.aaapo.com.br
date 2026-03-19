require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const seo = require("./src/data/seo.json")
const manifest = require("./src/data/manifest.json")
module.exports = {
  siteMetadata: {
    title: seo.title,
    siteUrl: seo.url,
    description: seo.description,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: manifest.name,
        short_name: manifest.short_name,
        start_url: "/",
        background_color: manifest.background_color,
        theme_color: manifest.theme_color,
        display: "standalone",
        icon: `${__dirname}/src` + manifest.icon,
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: seo.url,
        sitemap: seo.url + "/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}