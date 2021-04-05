module.exports = {
  siteMetadata: {
    title: 'HrFlow.ai demo job board',
    description: `
      HrFlow.ai demo job board
    `,
    siteUrl: 'https://Damsic.cvbox.com',
    image: 'your og image url',
    author:  'HrFlow.ai',
    organization: {
      name: 'Hrflow.ai',
      url: 'https://hrflow.ai',
      logo: 'https://img.riminder.net/logo/Logo.svg',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    '@bumped-inc/gatsby-plugin-optional-chaining',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "open-job-board",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
}