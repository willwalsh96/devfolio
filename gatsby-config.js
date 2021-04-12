module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'William Walsh',
    // Main Site Title
    title: `Please let me work with you!`,
    // Description that goes under your name in main bio
    description: `web-development, amazon web services, computer troubleshooting, networking`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/willwalsh96`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/william-walsh-00ba11113/`,
    // Content of the About Me section
    about: `My interest in computers and technology has been lifelong.
    I gained access to highspeed internet at the tender age of 9, and since then I've been learning incessantly.
    Now that I'm 25 I recognize how important programming skills can be..... `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: 'Devfolio',
    //     description:
    //       'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'ChromeExtensionKit',
    //     description:
    //       'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
    //     link: 'https://chromeextensionkit.com/?ref=devfolio',
    //   },
    //   {
    //     name: 'Another Cool Project',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // experience: [
    //   {
    //     name: 'Acme Corp',
    //     description: 'Full-Stack Developer, February 2020 - Present',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Globex Corp',
    //     description: 'Full-Stack Developer, December 2017 - February 2020',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Hooli',
    //     description: 'Full-Stack Developer, May 2015 - December 2017',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // // Optional: List your skills, they must have `name` and `description`.
    // skills: [
    //   {
    //     name: 'Languages & Frameworks',
    //     description:
    //       'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
    //   },
    //   {
    //     name: 'Databases',
    //     description: 'MongoDB, PostreSQL, MySQL',
    //   },
    //   {
    //     name: 'Other',
    //     description:
    //       'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
    //   },
    // ],
  },

  plugins: [

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-03L081TSWJ', // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: `G-03L081TSWJ`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
