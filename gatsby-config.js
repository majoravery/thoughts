// support for .env, .env.development, and .env.production
require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://averysthoughts.gatsbyjs.io/",
    title: "Avery's Thoughts",
    author: "Avery",
    description: "Virtual space for thoughts that ought to be ironed out",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Avery's Thoughts",
        short_name: "Thoughts",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#fffff",
        theme_color: "#ffffff",
        icon: "src/favicon.ico",
      },
    },
    "gatsby-theme-contentful-blog",
  ],
};
