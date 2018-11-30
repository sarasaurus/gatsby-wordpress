import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
  
    <Link to={post.frontmatter.path}>

      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
    <p>{post.excerpt}</p>
    <button><Link to={post.frontmatter.path}>Read more</Link></button>
  </div>
)
console.log('POSTLINK POST DATA', PostLink);
export default PostLink