module.exports = {
   siteMetadata: {
      title: `Let's Furnish Sweden AB`,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi praesentium, illum, magnam a inventore accusamus exercitationem magni, maxime tenetur vel quaerat.`,
      author: `@lets-furnish`,
      instagram: `https://instagram.com`,
      facebook: `https://facebook.com`,
      twitter: `https://twitter.com`,
      youtube: `https://youtube.com`,
   },
   plugins: [
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
            // displayName: false
         },
      },
      `gatsby-plugin-offline`
  ],
}
