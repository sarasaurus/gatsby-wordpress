/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const postTemplate = path.resolve(`./src/templates/post.js`)

// _.each(result.data.allWordpressPost.edges, edge => {
//   createPage({
//     // will be the url for the page
//     path: edge.node.slug,
//     // specify the component template of your choice
//     component: slash(postTemplate),
//     // In the ^template's GraphQL query, 'id' will be available
//     // as a GraphQL variable to query for this posts's data.
//     context: {
//       id: edge.node.id,
//     },
//   })
// })
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}