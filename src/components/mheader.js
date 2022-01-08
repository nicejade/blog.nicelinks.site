import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../styles/mheader.scss"

export class MHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandMenu: false
    }
    this.handleToggleButton = this.handleToggleButton.bind(this)
  }

  handleToggleButton() {
    this.setState({
      isExpandMenu: !this.state.isExpandMenu
    })

    let layout = document.getElementById('layout')
    layout.className = layout.className.includes('menu-expand') ? '' : 'menu-expand'
  }

  render() {
    return (<header className="mheader">
      <Link className="header-link" to="/">
        <StaticImage
          src="../images/logo.png"
          quality={95}
          className="logo"
          formats={["auto", "webp", "avif"]}
          alt={this.props.siteTitle}
        />
        <h1 className="title">
          {this.props.siteTitle}
        </h1>
      </Link>
      <div className="secondary">
        <button className="toggler-menu" onClick={this.handleToggleButton}>
          {
            this.state.isExpandMenu ?
              <span className="gg-close"></span> :
              <span className="gg-menu-right"></span>
          }
        </button>
      </div>
      <div className="side-nav">
        <strong className="submenu-title">友情链接</strong>
        <ul className="friends">
          <Link className="link" to="https://nicelinks.site/">倾城之链</Link>
          <Link className="link" to="https://read.lovejade.cn/">曼妙句子</Link>
          <Link className="link" to="https://www.jeffjade.com/">晚晴幽草轩</Link>
          <Link className="link" to="https://quickapp.lovejade.cn/">静轩之别苑</Link>
          <Link className="link" to="https://forum.lovejade.cn/">悠然宜想亭</Link>
        </ul>
      </div>
    </header>)
  }
}

MHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MHeader.defaultProps = {
  siteTitle: ``,
}

export default MHeader
