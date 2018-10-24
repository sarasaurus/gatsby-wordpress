require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `sarahbixlercom.wordpress.com`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          // htaccess_user: process.env.HTACCESS_USER,
          // htaccess_pass: process.env.HTACCESS_PASS,
          // htaccess_sendImmediately: true,
  
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret:
            process.env.CLIENT_SECRET,
          wpcom_app_clientId: process.env.CLIENT_ID,
          wpcom_user: process.env.WP_USER,
          wpcom_pass: process.env.WP_PASS,
        },
      // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
      // It can help you debug specific API Endpoints problems.
      verboseOutput: true,
      // Set how many pages are retrieved per API request.
      perPage: 100,
      // Search and Replace Urls across WordPress content.
      // searchAndReplaceContentUrls: {
      //   sourceUrl: "https://source-url.com",
      //   replacementUrl: "https://replacement-url.com",
      // },
      // Set how many simultaneous requests are sent at once.
      concurrentRequests: 10,
      // Set WP REST API routes whitelists
      // and blacklists using glob patterns.
      // Defaults to whitelist the routes shown
      // in the example below.
      // See: https://github.com/isaacs/minimatch
      // Example:  `["/*/*/comments", "/yoast/**"]`
      // ` will either include or exclude routes ending in `comments` and
      // all routes that begin with `yoast` from fetch.
      // Whitelisted routes using glob patterns
      // includedRoutes: [
      //   "**",
      //   "*",
      //   "/*/*/categories",
      //   "/*/*/posts",
      //   "/*/*/pages",
      //   "/*/*/media",
      //   "/*/*/tags",
      //   "/*/*/taxonomies",
      //   "/*/*/users",
      // ],
      // Blacklisted routes using glob patterns
      // excludedRoutes: [],
      // use a custom normalizer which is applied after the built-in ones.
      normalizer: function({ entities }) {
        return entities
      },
      }
    },
    
  ],
}