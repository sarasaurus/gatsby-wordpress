import React from 'react'
import { Link } from 'gatsby'
import Notes from './notes-trial'

import Layout from '../components/layout'

const Blog = (data) => (
  // this works because of implicit return of arrow functions
  <Layout>
    <h1>Blog Posts</h1>
    <p>Welcome to the Blog</p>
    <Notes data={this.props.data}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog