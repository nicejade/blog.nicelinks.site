import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MHeader from "./mheader"
import Footer from "./footer"
// import Elevator from './elevator'
import "./../styles/layout.css"
import "./../styles/markdown.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || ``} />
      <MHeader siteTitle={data.site.siteMetadata?.title || ``} />
      <section className="wrapper">
        <article className="markdown-body">
          {children}
        </article>
      </section>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
