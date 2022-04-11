import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

import "./../styles/global.scss"
import "./../styles/article.scss"

const Post = ({ data, location }) => {
  const num = location.pathname.replace(/\//ig, '').split('-')[1]
  const title = `优质网站同好者周刊（第 ${num} 期）`
  const post = data.markdownRemark
  return (
    <main id="main" className="article-page">
      <Seo title={title} />
      <Layout pathname={location.pathname} title={title}>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </main>
  )
}

export default Post

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        gitAuthorTime
        slug
      }
    }
  }
`