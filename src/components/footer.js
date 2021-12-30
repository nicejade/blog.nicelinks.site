import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './../styles/footer.scss'

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div>
      <Link className="link" to='/'>倾城博客</Link>{` `} Copyright © {new Date().getFullYear()}, 基于{` `}
      <Link className="link" to="https://nicelinks.site/post/5e0d4f3016bdad16b0f5b20e">Gatsby</Link> 而构建
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
