import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Index } from "lunr"

import "./../../styles/search.scss"

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResultArr: [],
      isShowResults: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.getQueryResult = this.getQueryResult.bind(this);
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search.slice(1)) || {}
    const keyword = params.get('q')
    this.highlightKeyword(keyword)
    setTimeout(() => {
      const markNode = document.querySelector("#layout .mark-highlight");
      markNode && markNode.scrollIntoView({ behavior: "smooth", block: "end" });
      this.forceUpdate()
    }, 100)
  }

  componentDidUpdate() {
  }

  highlightKeyword(keyword) {
    const tagsArr = ['a', 'code', 'li', 'p', 'span', 'h2', 'h3', 'h4', 'h5', 'strong']
    tagsArr.forEach((tag) => {
      let isFindTargets = false;
      if (isFindTargets) return
      const nodeDomObj = document.querySelectorAll(`#layout .wrapper ${tag}`)
      Object.values(nodeDomObj).forEach((dom) => {
        const regex = new RegExp(keyword, 'ig')
        if (regex.test(dom.innerText)) {
          isFindTargets = true
          dom.innerHTML = this.transformContent(dom.innerHTML, keyword)
          return
        }
      })
    })
  }

  getQueryResult = (query) => {
    const lunrData = this.props.lunrData
    const { store } = lunrData.LunrIndex
    // Lunr in action here
    const index = Index.load(lunrData.LunrIndex.index)
    let results = []
    try {
      // Search is a lunr method
      results = index.search(query).map(({ ref }) => {
        // Map search results to an array of {slug, title, excerpt} objects
        return {
          slug: ref,
          ...store[ref],
        }
      })
      return results || []
    } catch (error) {
      console.error(`Something Error: ${error}`)
      return results
    }
  }

  sliceToAheadTarget(string = '', target = '', position = 15) {
    const index = string.indexOf(target)
    if (index <= position) return string
    const sliceIdx = index - position
    const length = string.length - sliceIdx
    return '...' + string.substr(sliceIdx, length)
  }

  transformContent(content, keyword) {
    return content.replace(new RegExp(keyword, 'ig'), this.wrapKeywordWithMark(keyword))
  }

  wrapKeywordWithMark(keyword) {
    return `<span class="mark-highlight">${keyword}</span>`
  }

  getContentMainPart(content) {
    const desc = this.sliceToAheadTarget(content, this.keywords)
    return this.transformContent(desc, this.keywords)
  }

  handleSearch(keywords) {
    // NEED FIXED: 解决当 del 输入内容，至最后一项时，存在很大延时；
    let queryResultArr;
    if (!keywords) {
      queryResultArr = []
    } else {
      queryResultArr = this.getQueryResult(keywords)
    }
    this.keywords = keywords
    this.setState({
      queryResultArr: queryResultArr,
      isShowResults: queryResultArr.length > 0
    })
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.handleSearch(value)
  }

  handleInputBlur() {
    setTimeout(() => {
      this.setState({
        queryResultArr: [],
        isShowResults: false
      })
    }, 100)
  }

  handleInputFocus() {
    this.handleSearch(this.keywords)
  }

  render() {
    return (<div className="search-area">
      <input className="search-bar"
        placeholder="搜索精彩内容"
        value={this.keywords || ''}
        onBlur={this.handleInputBlur}
        onFocus={this.handleInputFocus}
        onChange={this.handleInputChange}
      />
      <div className="search-panel" style={{ "display": this.state.isShowResults ? 'block' : 'none' }}>
        {
          this.state.isShowResults
            ? this.state.queryResultArr.map((item, index) => {
              const slug = item.slug.replace('/blogs', '')
              const num = slug.replace(/\//ig, '').split('-')[1]
              const title = `优质网站同好者周刊（第 ${num} 期）- 倾城之链`
              const content = this.getContentMainPart(item.content)
              return (<Link className="jump-link" to={`${slug}?q=${this.keywords}`} key={index}>
                <li className="item">
                  <p className="title">{title}</p>
                  <p className="desc" dangerouslySetInnerHTML={{ __html: content }}></p>
                </li>
              </Link>)
            }) : ''
        }
      </div>
    </div >)
  }
}

Search.propTypes = {
  lunrData: PropTypes.object,
}

Search.defaultProps = {
  lunrData: [],
}


