import React from 'react';
// import { graphql } from "gatsby"
import uuid4 from 'uuid/v4';
import PostLink from "./post-link";
import styles from './images.module.css';


console.log('IMAGE STYLE:', styles);

// data: {
//   allMarkdownRemark: { edges }
// },
const Images = (props) => {
  
  console.log('IMAGES DATA', props.data);

}

export default Images;