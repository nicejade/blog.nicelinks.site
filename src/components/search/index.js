import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./../../styles/search.scss"

export const Search = () => {
  // const gBaseData = useStaticQuery(graphql`
  //   query {
  //     LunrIndex
  //   }
  // `)
  // console.log(`data`, gBaseData)
  // const getQueryResult = (query) => {
  //   const { store } = gBaseData.LunrIndex
  //   // Lunr in action here
  //   const index = Index.load(gBaseData.LunrIndex.index)
  //   let results = []
  //   try {
  //     // Search is a lunr method
  //     results = index.search(query).map(({ ref }) => {
  //       // Map search results to an array of {slug, title, excerpt} objects
  //       return {
  //         slug: ref,
  //         ...store[ref],
  //       }
  //     })
  //     return results || []
  //   } catch (error) {
  //     console.error(`Something Error: ${error}`)
  //     return results
  //   }
  // }

  return (
    <div className="search-area">
      <input className="search-bar" placeholder="搜索精彩内容" />
    </div>
  )
}


