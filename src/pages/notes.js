import React from 'react'
// import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import styles from '../components/notes.module.css'

console.log(styles);

// data: {
//   allMarkdownRemark: { edges }
// },
const Notes = (props) => {
  
  console.log('NOTES DATA', props.data);
  console.log('EDGES OR SOMETHING?', props.data.allMarkdownRemark.edges);
  // in a react class component, you could access data via props? like: this.props.data?
  // console.log('WHAT DATA BRO', edges);
  const Post = props.data.allMarkdownRemark.edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
   

  return <div>{Post}</div>
}

export default Notes;