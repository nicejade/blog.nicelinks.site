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
      <div className="recommend">
        <a
          target="_blank"
          rel="noopener"
          href="https://x.com/intent/follow?screen_name=MarshalXuan"
          title="轩帅(MarshalXuan) @ X.com"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#212121"
          >
            <path d="M 18.242188 2.25 L 21.554688 2.25 L 14.324219 10.507812 L 22.828125 21.75 L 16.171875 21.75 L 10.953125 14.933594 L 4.992188 21.75 L 1.679688 21.75 L 9.40625 12.914062 L 1.257812 2.25 L 8.082031 2.25 L 12.792969 8.480469 Z M 17.082031 19.773438 L 18.914062 19.773438 L 7.082031 4.125 L 5.113281 4.125 Z M 17.082031 19.773438 "></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "1em" }}
          href="https://github.com/nicejade/blog.nicelinks.site"
        >
          <svg viewBox="0 0 16 16" fill="#212121" width="24" height="24">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
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
