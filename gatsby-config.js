module.exports = {
  siteMetadata: {
    siteUrl: 'https://blog.nicelinks.site',
    title: '倾城博客',
    description: '倾城之链作为一个开放平台，旨在云集全球优秀网站，探索互联网中更广阔的世界。此周刊，将汇聚过去一周倾城所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见关于倾城。'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-XXXXYYYY',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 4,
              className: 'table-of-contents',
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
  ],
}