
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
  const getWeeklySlugAndNum = (slug) => {
    slug = slug.replace('/blogs', '')
    const num = slug.replace(/\//ig, '').split('-')[1]
    return { slug, num }
  }

  const nodes = data.allMarkdownRemark.nodes
  const allArticleArr = nodes.sort((a, b) => {
    const { num: numA } = getWeeklySlugAndNum(a.fields.slug)
    const { num: numB } = getWeeklySlugAndNum(b.fields.slug)
    return numB - numA
  })

  const getTitleBySlug = (slug) => {
    const num = slug.replace(/\//ig, '').split('-')[1]
    return `优质网站同好者周刊（第 ${num} 期）- 倾城之链`
  }

  return (
    <div className="content">
      {
        allArticleArr.map(item => {
          const { slug, num } = getWeeklySlugAndNum(item.fields.slug)
          const imgPath = `https://image.nicelinks.site/jpg/nice-links-${num}.jpg?imageView2/1/w/512/h/288/interlace/1/ignore-error/1`
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
