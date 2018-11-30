import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
    
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
console.log('POSTLINK POST DATA', PostLink);
export default PostLink