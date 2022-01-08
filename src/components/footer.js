import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './../styles/footer.scss'

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="icp">
      <p className="item"> <Link className="link" to='/'>{siteTitle}</Link>{` `} Copyright © {new Date().getFullYear()}</p>
      <p className="item">基于{` `}
        <a className="link" target="_blank" rel="noreferrer" href="https://nicelinks.site/post/5e0d4f3016bdad16b0f5b20e">GatsbyJS</a> 而构建</p>
      <p className="item"><a className="link beian-link" href="http://www.beian.miit.gov.cn/">粤ICP备17099767号-2</a>
        <img className="zero" src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/zero.gif" alt="深圳市市场监督管理局企业主体身份公示" /></p>
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
