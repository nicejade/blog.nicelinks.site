module.exports = {
  siteMetadata: {
    siteUrl: 'https://blog.nicelinks.site',
    title: '倾城博客',
    description: '倾城之链作为一个开放平台，旨在云集全球优秀网站，探索互联网中更广阔的世界。倾城博客，将汇聚过去一周倾城所收录的内容，以飨同好者。'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-2VDXPGLQ4K',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-2VDXPGLQ4K", // Google Analytics / GA
          "ca-pub-8586652723015758", // Google Ads / Adwords / AW
          "",
        ],
      }
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
    'gatsby-plugin-minify-html',
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