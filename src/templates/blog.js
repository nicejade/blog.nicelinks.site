import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

import "./../styles/global.scss"

const Post = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <main>
      <Seo title="Home" />
      <Layout updatetime={post.fields.gitAuthorTime} hash={decodeURI(location.hash)}>
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
        slug
      }
    }
    LunrIndex
  }
`