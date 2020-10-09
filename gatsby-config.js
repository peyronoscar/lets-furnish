module.exports = {
   siteMetadata: {
      title: `Let's Furnish Sweden AB`,
      description: `Det självklara valet för dig som vill exponera ditt varumärke till potentiella kunder och andra intressenter.`,
      author: `@lets-furnish`,
      instagram: `https://www.instagram.com/letsfurnishsweden/`,
      facebook: `https://www.facebook.com/LetsFurnishSE`,
      twitter: `https://twitter.com/lets__furnish`,
      youtube: `https://youtube.com`,
   },
   plugins: [
      {
         resolve: `gatsby-plugin-gtag`,
         options: {
           trackingId: `UA-180248481-1`,
         },
       },
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
           name: `GatsbyJS`,
           short_name: `GatsbyJS`,
           start_url: `/`,
           background_color: `#f7f0eb`,
           theme_color: `#a2466c`,
           display: `standalone`,
           icon: `src/images/icon.png`,
           icon_options: {
            purpose: `any maskable`,
          },
         },
      },
      {
         resolve: 'gatsby-plugin-web-font-loader',
         options: {
           google: {
             families: ['Poppins:100,200,300,400,500,600,700,800,900']
           }
         }
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      `gatsby-transformer-sharp`,
      {
         resolve: `gatsby-plugin-sharp`,
         options: {
            base64Width: 1
         }
      },
      {
         resolve: `gatsby-plugin-styled-components`,
         options: {
            displayName: false
         },
      },
      {
         resolve: `gatsby-plugin-canonical-urls`,
         options: {
           siteUrl: `https://www.letsfurnish.se`,
         },
       },
      `gatsby-plugin-offline`
  ],
}
