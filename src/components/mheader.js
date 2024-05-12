import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../styles/mheader.scss"

export class MHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpandMenu: false,
    }
    this.handleToggleButton = this.handleToggleButton.bind(this)
  }

  handleToggleButton() {
    this.setState({
      isExpandMenu: !this.state.isExpandMenu,
    })

    let layout = document.getElementById("main")
    layout.className = layout.className.includes("menu-expand")
      ? ""
      : "menu-expand"
  }

  render() {
    return (
      <header className="mheader">
        <Link className="header-link" to="/">
          <StaticImage
            src="../images/logo.png"
            quality={95}
            className="logo"
            formats={["auto", "webp", "avif"]}
            alt={this.props.siteTitle}
          />
          <h1 className="title">{this.props.siteTitle}</h1>
        </Link>
        <div className="secondary">
          <span
            role="button"
            tabIndex="0"
            className="toggler-menu"
            onClick={this.handleToggleButton}
            onKeyDown={this.handleToggleButton}
          >
            {this.state.isExpandMenu ? (
              <span className="gg-close"></span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-align-right"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#212121"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="10" y1="12" x2="20" y2="12" />
                <line x1="6" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </span>
        </div>
        <div className="side-nav">
          <strong className="submenu-title">友情链接</strong>
          <ul className="friends">
            <Link className="link" to="https://nicelinks.site/">
              倾城之链
            </Link>
            <Link className="link" to="https://read.lovejade.cn/">
              曼妙句子
            </Link>
            <Link className="link" to="https://www.jeffjade.com/">
              晚晴幽草轩
            </Link>
            <Link className="link" to="https://quickapp.lovejade.cn/">
              静轩之别苑
            </Link>
            <Link className="link" to="https://forum.lovejade.cn/">
              悠然宜想亭
            </Link>
            <Link className="link" to="https://wiki.lovejade.cn/">
              清风明月阁
            </Link>
          </ul>
        </div>
      </header>
    )
  }
}

MHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MHeader.defaultProps = {
  siteTitle: ``,
}

export default MHeader
