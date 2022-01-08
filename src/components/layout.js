import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import MHeader from "./mheader"
import Footer from "./footer"
// import Elevator from './elevator'
import "./../styles/layout.css"
import "./../styles/markdown.css"

const Layout = ({ children, title, pathname }) => {
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
    <div id="layout">
      <Header siteTitle={data.site.siteMetadata?.title || ``} />
      <MHeader siteTitle={data.site.siteMetadata?.title || ``} />
      <section className="wrapper">
        {
          title ? <Link className="article-link" to={pathname}>
            <h1 className="article-title">{title}</h1>
          </Link> : ''
        }
        <article className="markdown-body">
          {children}
        </article>
      </section>
      <Footer siteTitle={data.site.siteMetadata?.title || ``} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
