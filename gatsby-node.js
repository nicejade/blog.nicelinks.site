
const path = require(`path`)
const { execSync } = require('child_process')
const marked = require('marked')
const striptags = require(`striptags`)
const { GraphQLJSONObject } = require(`graphql-type-json`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const lunr = require('lunr')
require('./src/helper/lib/lunr.stemmer.support.js')(lunr)
require('./src/helper/lib/lunr.zh.js')(lunr)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString()
    createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              gitAuthorTime
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug.replace('/blogs', '')
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug,
      },
    })
  })
}

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const docsNodes = context.nodeModel.getAllNodes({
            type: `MarkdownRemark`,
          })
          const type = info.schema.getType(`MarkdownRemark`)
          return createIndex(docsNodes, type, cache)
        },
      },
    },
  })
}

const createIndex = async (docsNodes, type, cache) => {
  const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }
  const documents = []
  const store = {}
  // iterate over all posts
  for (const node of docsNodes) {
    const { slug } = node.fields
    const title = node.frontmatter.title
    const tag = node.frontmatter.tag
    const content = striptags(marked.parse(node.rawMarkdownBody))
    documents.push({
      slug,
      title,
      tag,
      content,
    })

    store[slug] = {
      title,
      tag,
      content,
    }
  }
  const index = lunr(function () {
    this.use(lunr.zh)
    this.ref('slug')
    this.field('title')
    this.field('tag')
    this.field('content')
    for (const doc of documents) {
      this.add(doc)
    }
  })

  const json = { index: index.toJSON(), store }
  await cache.set(cacheKey, json)
  return json
}