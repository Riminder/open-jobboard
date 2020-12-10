module.exports = {
  siteMetadata: {
    title: 'Your job board title',
    description: `
      Your job board description
    `,
    siteUrl: 'https://example.com',
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
        bucketName: "your s3 bucket name",
      },
    },
  ],
}
