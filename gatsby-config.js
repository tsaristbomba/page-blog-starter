module.exports = {
  siteMetadata: {
    title: `Luden`,
    seoTitle: `Luden is a great theme`,
    description: `Luden is a great theme`,
    author: `@tsaristbomba`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    image: "/june.png",
    logo: "logo.svg",
    form: false,
    svgImgs: false,
    attach: false,
    anchorLinks: false,
    scrollBtn: true,
    icons: true,
    wave: true,
    triangle: false,
    curve: false,
    tilt: false,
    themes: {
      light: {
        title: "light",
        colors: {
          primary: "#FFA729", // Brand color
          primaryDark: "#B36900",
          primaryLight: "#D8D6D6", // H
          secondary: "#B36900",
          secondaryLight: "#FFA729",
          neutralDark: "#2d2d2d", // Text color
          neutralMedium: "#D8D6D6", // Heavier medium (gotta be gray)
          neutralLight: "#fff", // bg color
        },
      },
      dark: {
        title: "dark",
        colors: {
          primary: "#B36900", // Brand color
          primaryDark: "#FFA729",
          primaryLight: "#484848", // H
          secondary: "#FFA729",
          secondaryLight: "#B36900",
          neutralDark: "#fff", // Text color
          neutralMedium: "#777777", // Heavier medium (gotta be gray)
          neutralLight: "#2d2d2d", // bg color
        },
      },
    },
    footerLinks: [
      {
        title: "Learn About Us",
        links: [
          { title: "About", slug: "#About" },
          {
            title: "Services",
            slug: "#Services",
          },
          { title: "Team", slug: "#Team" },
          { title: "Contact", slug: "#Contact" },
          { title: "Plans", slug: "#Plans" },
          { title: "Newsletter", slug: "#Banner" },
        ],
      },
      {
        title: "Legal",
        links: [
          { title: "Terms & Conditions", slug: "terms-conditions" },
          { title: "Privacy Policy", slug: "privacy-policy" },
        ],
      },
    ],
    navLinks: [
      {
        name: "Blog",
        slug: "blog",
      },
    ],
    socials: [
      { title: "INSTAGRAM", link: "https://instagram.com/archilect" },
      { title: "YOUTUBE", link: "https://youtube.com/pewdiepie" },
      { title: "TWITTER", link: "https://twitter.com/naval" },
      { title: "WHATSAPP", link: "https://twitter.com/naval" },
    ],
    social: {
      github: `tsaristbomba`,
      twitter: ``,
    },
  },
  flags: {
    PARALLEL_SOURCING: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `@teefe/gatsby-theme-luden`,
    // `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    `gatsby-plugin-perf-budgets`,
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `blog-assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFA729`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        lang: `pt-br`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
