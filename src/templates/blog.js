import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
// import Header from '../components/header'
// import Layout from '../components/layout'
// import Elevator from '../components/elevator'
// import Footer from '../components/footer'
// import { setBaseData } from '../helper/utils.js'

const Post = ({ data, location }) => {
  // setBaseData(data)
  const post = data.markdownRemark
  console.log(`post`, post)

  return (
    <main>
      <Seo />
      {/* <Header pathname={location.pathname} />
      <Layout updatetime={post.fields.gitAuthorTime} hash={decodeURI(location.hash)}>
        <div className="wrapper">
          <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Footer />
      </Layout>
      <Elevator /> */}
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