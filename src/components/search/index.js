import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Mark from "mark.js"

import "./../../styles/search.scss"

const Search = (props) => {
  const [queryResultArr, setQueryResultArr] = useState([]);
  const [isShowResults, setIsShowResults] = useState(false);
  const [keywords, setKeywords] = useState(false);

  useEffect(() => {
    let cancel = false;
    const params = new URLSearchParams(window.location.search.slice(1)) || {}
    const keyword = params.get('q')
    if (!keyword) return
    highlightKeyword(keyword)
    if (cancel) return

    const timer = setTimeout(() => {
      const markNode = document.querySelector("#main .mark-highlight");
      markNode && markNode.scrollIntoView({ behavior: "smooth", block: "start" });
      clearTimeout(timer)
    }, 800)
    return () => {
      cancel = true
      clearTimeout(timer)
    }
  }, [])

  const highlightKeyword = (keyword) => {
    const contentDom = document.querySelector(`#main .wrapper .content`)
    const instance = new Mark(contentDom);
    instance.mark(keyword, {
      exclude: ["h1"],
      className: "mark-highlight"
    });
  }

  const getQueryResult = (query) => {
    const lunrData = props.lunrData
    const result = []
    lunrData.map(item => {
      if (item.content.includes(query)) {
        result.push(item)
      }
    })
    return result
  }

  const sliceToAheadTarget = (string = '', target = '', position = 15) => {
    const index = string.indexOf(target)
    if (index <= position) return string
    const sliceIdx = index - position
    const length = string.length - sliceIdx
    return '...' + string.substr(sliceIdx, length)
  }

  const transformContent = (content, keyword) => {
    return content.replace(new RegExp(keyword, 'ig'), wrapKeywordWithMark(keyword))
  }

  const wrapKeywordWithMark = (keyword) => {
    return `<mark class="mark-highlight">${keyword}</mark>`
  }

  const getContentMainPart = (content) => {
    const desc = sliceToAheadTarget(content, keywords)
    return transformContent(desc, keywords)
  }

  const handleSearch = (_keywords) => {
    // NEED FIXED: 解决当 del 输入内容，至最后一项时，存在很大延时；
    let queryResultArr;
    if (!_keywords) {
      queryResultArr = []
    } else {
      queryResultArr = getQueryResult(_keywords)
    }
    setKeywords(_keywords)
    setQueryResultArr(queryResultArr)
    setIsShowResults(queryResultArr.length > 0)
  }

  const handleInputChange = (event) => {
    const value = event.target.value;
    handleSearch(value)
  }

  const simulate = (time) => new Promise(
    resolve => setTimeout(() => resolve("time out."), time)
  )

  const handleInputBlur = async (event) => {
    await simulate(2000)
    setQueryResultArr([])
    setIsShowResults(false)
    setKeywords('')
  }

  const handleInputFocus = () => {
    handleSearch(keywords)
  }

  return (<div className="search-area">
    <input className="search-bar"
      placeholder="搜索精彩内容"
      value={keywords || ''}
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      onChange={handleInputChange}
    />
    <div className="search-panel" style={{ "display": isShowResults ? 'block' : 'none' }}>
      {
        isShowResults
          ? queryResultArr.map((item, index) => {
            const slug = item.slug.replace('/blogs', '')
            const num = slug.replace(/\//ig, '').split('-')[1]
            const title = `优质网站同好者周刊（第 ${num} 期）- 倾城之链`
            const content = getContentMainPart(item.content)
            return (<Link className="jump-link" to={`${slug}?q=${keywords}`} key={item.slug}>
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

export default Search