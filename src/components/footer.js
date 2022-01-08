import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './../styles/footer.scss'

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="friends">
      <strong className="submenu-title">友情链接：</strong>
      <Link className="link" to="https://nicelinks.site/">倾城之链</Link>
      <Link className="link" to="https://read.lovejade.cn/">曼妙句子</Link>
      <Link className="link" to="https://www.jeffjade.com/">晚晴幽草轩</Link>
      <Link className="link" to="https://quickapp.lovejade.cn/">静轩之别苑</Link>
      <Link className="link" to="https://forum.lovejade.cn/">悠然宜想亭</Link>
    </div>
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
