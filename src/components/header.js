import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { marked } from 'marked';

import Search from './search/index.js'
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
      content: content.replace(/<[^>]*>/g, "")
    }
  })

  return (<header className="header">
    <Link className="header-link" to="/">
      <StaticImage
        src="../images/logo.png"
        quality={95}
        className="logo"
        formats={["auto", "webp", "avif"]}
        alt={siteTitle}
      />
      <span className="title">
        {siteTitle}
      </span>
    </Link>
    <nav className="navbar">
      <Link className="link" to="https://nicelinks.site/explore/skill?sort=hottest">技术客栈</Link>
      <Link className="link" to="https://nicelinks.site/explore/resource?sort=hottest">资源之家</Link>
      <Link className="link" to="https://nicelinks.site/explore/life?sort=hottest">写意人生</Link>
      <Link className="link" to="https://nicelinks.site/explore/info?sort=hottest">信息快讯</Link>
      <Link className="link" to="https://nicelinks.site/collections/theme">倾城主题</Link>
      <Link className="link" to="https://nicelinks.site/collections/tags">倾城标签</Link>
    </nav>
    <div className="secondary">
      <Search lunrData={lunrData} />
    </div>
  </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
