
import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import "./../styles/list.scss"

const List = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
     }
    `)
  const allArticleArr = data.allMarkdownRemark.nodes
  const getTitleBySlug = (slug) => {
    const num = slug.replace(/\//ig, '').split('-')[1]
    return `优质网站同好者周刊（第 ${num} 期）- 倾城之链`
  }

  return (
    <div className="container">
      {
        allArticleArr.map((item, idx) => {
          const slug = item.fields.slug
          // const num = slug.replace(/\//ig, '').split('-')[1]
          // const imgPath = `https://image.nicelinks.site/jpg/nice-links-${num}.jpg`
          const imgPath = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2Fmn02%2F123120154917%2F201231154917-0.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643432549&t=6878b0ebbdefb360eca10215ef3cd280'
          return (<section className="article-card" key={slug}>
            < Link className="link" to={slug} key={slug} >
              <img className="card-picture" src={imgPath} alt={getTitleBySlug(slug)} />
              <h2 className="title">{getTitleBySlug(slug)}</h2>
            </Link>
          </section>)
        })
      }
    </div>
  )
}

export default List
