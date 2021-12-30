import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Search } from './search/index.js'
import "./../styles/mheader.scss"

const MHeader = ({ siteTitle }) => (
  <header className="mheader">
    <Link className="link" to="/">
      <h1 className="title">
        <StaticImage
          src="../images/logo.png"
          quality={95}
          className="logo"
          formats={["auto", "webp", "avif"]}
          alt={siteTitle}
        />
      </h1>
    </Link>
    <div className="secondary">
      <Search />
    </div>
  </header>
)

MHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MHeader.defaultProps = {
  siteTitle: ``,
}

export default MHeader
