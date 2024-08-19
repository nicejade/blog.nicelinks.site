import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import "./../styles/global.scss"

const IndexPage = () => (
  <main className="index-page">
    <Layout>
      <Seo
        title="优质网站之家"
        path="https://link.niceshare.site/"
        description="倾城之链，在线卓越导航平台，免费资源网站大全；旨在云集全球优质网站，分享和发现互联网中更广阔的世界，以提高您工作效率以及生活质量。"
      />
      <List />
    </Layout>
  </main>
)

export default IndexPage
