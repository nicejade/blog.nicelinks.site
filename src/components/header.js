import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import { Search } from './search/index.js'
import "./../styles/header.scss"

const Header = ({ siteTitle }) => {
  const lunrData = useStaticQuery(graphql`
    query {
      LunrIndex
    }
  `)

  return (<header className="header">
    <Link className="header-link" to="/">
      <StaticImage
        src="../images/logo.png"
        quality={95}
        className="logo"
        formats={["auto", "webp", "avif"]}
        alt={siteTitle}
      />
      <h1 className="title">
        {siteTitle}
      </h1>
    </Link>
    <nav className="navbar">
      <Link className="link" to="https://nicelinks.site/">倾城之链</Link>
      <Link className="link" to="https://www.jeffjade.com/">晚晴幽草轩</Link>
      <Link className="link" to="https://quickapp.lovejade.cn/">静轩之别苑</Link>
      <Link className="link" to="https://forum.lovejade.cn/">悠然宜想亭</Link>
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
