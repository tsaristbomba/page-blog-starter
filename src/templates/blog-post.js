import * as React from "react"
import { Link, graphql } from "gatsby"

import { Hero, Layout, Seo } from "@teefe/gatsby-theme-luden"
import BlogLayout from "../components/blogLayout"

const BlogPostTemplate = ({ data, location }) => {
  const [queryImg, setQuery] = React.useState()

  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  React.useEffect(() => {
    const postImage = post.frontmatter.image

    const newImage = postImage !== null ? postImage.substr(13) : "blog"

    setQuery(newImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout light sticky rounded="true" progress noicon>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Hero
        data={{
          //   topTitle: "Its Easy!",
          title: post.frontmatter.title,
          image: queryImg,
        }}
        // full={!svgImgs}
        bg
        // svg={svgImgs}
        center
        small
        //   rounded="true"
        //   anchor={hero.anchor}
      />
      <BlogLayout shadow="true">
        <small style={{ fontWeight: "400" }}>
          <Link to="/blog">← Todos os Blogs</Link>
        </small>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer></footer>
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </BlogLayout>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY", locale: "pt-br")
        description
        image
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
