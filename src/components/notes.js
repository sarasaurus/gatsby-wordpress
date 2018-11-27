import React from 'react';
// import { graphql } from "gatsby"
import uuid4 from 'uuid/v4';
import PostLink from "./post-link";
import styles from './notes.module.css';


console.log('NOTE STYLE:', styles);

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
    .map(edge => <li key={uuid4()}><PostLink key={edge.node.id} post={edge.node} /></li>)
   

  return <div><ul>{Post}</ul></div>
}

export default Notes;