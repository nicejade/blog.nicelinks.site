import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Search } from './search/index.js'
import "./../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="title">
      <StaticImage
        src="../images/logo.png"
        quality={95}
        className="logo"
        formats={["auto", "webp", "avif"]}
        alt={siteTitle}
      />
      <Link className="link" to="/">{siteTitle}</Link>
    </h1>
    <nav className="navbar">
      <Link className="link" to="https://nicelinks.site/">倾城之链</Link>
      <Link className="link" to="https://www.jeffjade.com/">晚晴幽草轩</Link>
      <Link className="link" to="https://quickapp.lovejade.cn/">静轩之别苑</Link>
      <Link className="link" to="https://forum.lovejade.cn/">悠然宜想亭</Link>
    </nav>
    <div className="secondary">
      <Search />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
