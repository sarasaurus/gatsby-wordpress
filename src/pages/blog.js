import React, { Component } from 'react'
import { Link } from 'gatsby'
import Notes from '../components/notes'

import Layout from '../components/layout'

class Blog extends Component {
  render () {
    console.log('BLOG DATA', this.props.data);
    return (
      <Layout>
      <h1>Blog Posts</h1>
      <p>Welcome to the Blog</p>
      <Notes data={this.props.data}/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
  }
}
export default Blog;
// can I add prop type validation for props?


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
