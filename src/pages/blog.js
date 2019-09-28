import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recent posts" />
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>created at : {post.node.frontmatter.date}</small>
          <p>author: {post.node.frontmatter.author}</p>
          <Link to={`/${post.node.frontmatter.path}`}>Read more</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}
export const queryPost = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
          }
          excerpt
        }
      }
    }
  }
`
export default Blog
