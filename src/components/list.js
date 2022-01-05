
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
          const slug = item.fields.slug.replace('/blogs', '')
          const num = slug.replace(/\//ig, '').split('-')[1]
          const imgPath = `https://image.nicelinks.site/jpg/nice-links-${num}.jpg?imageView2/1/w/640/h/360/interlace/1/ignore-error/1`
          return (<section className="article-card" key={slug}>
            <Link className="link" to={slug} key={slug} >
              <img className="card-picture image-placeholder" src={imgPath} alt={getTitleBySlug(slug)} />
              <h2 className="title">{getTitleBySlug(slug)}</h2>
            </Link>
          </section>)
        })
      }
    </div>
  )
}

export default List
