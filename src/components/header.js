import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { marked } from "marked"

import Search from "./search/index.js"
import "./../styles/header.scss"

const Header = ({ siteTitle }) => {
  const edgesArr = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `).allMarkdownRemark.edges
  const lunrData = edgesArr.map(item => {
    const content = marked.parse(item.node.rawMarkdownBody)
    return {
      slug: item.node.fields.slug,
      title: item.node.frontmatter.title,
      content: content.replace(/<[^>]*>/g, ""),
    }
  })

  return (
    <header className="header">
      <Link className="header-link" to="/">
        <StaticImage
          src="../images/logo.png"
          quality={95}
          className="logo"
          formats={["auto", "webp", "avif"]}
          alt={siteTitle}
        />
        <span className="title">{siteTitle}</span>
      </Link>
      <nav className="navbar">
        <Link
          className="link"
          to="https://www.jeffjade.com/?ref=link.niceshare.site"
        >
          晚晴幽草轩
        </Link>
        <Link
          className="link"
          to="https://niceshare.site/?ref=link.niceshare.site"
        >
          逍遥自在轩
        </Link>
        <Link
          className="link"
          to="https://fine.niceshare.site/?ref=link.niceshare.site"
        >
          缘知随心庭
        </Link>
        <Link
          className="link"
          to="https://forum.lovejade.cn/?ref=link.niceshare.site"
        >
          悠然宜想亭
        </Link>
        <Link
          className="link"
          to="https://share.lovejade.cn/?ref=link.niceshare.site"
        >
          玉桃文飨轩
        </Link>
      </nav>
      <div className="secondary">
        <Search lunrData={lunrData} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
