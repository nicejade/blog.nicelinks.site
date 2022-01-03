import * as React from "react"
import Layout from "../components/layout"
import List from "../components/list"
import Seo from "../components/seo"

import "./../styles/global.scss"

const IndexPage = () => (
  <main>
    <Layout>
      <Seo title="倾城之链" />
      <div className="content" style={{ maxWidth: "120rem" }}>
        <List />
      </div>
    </Layout>
  </main>
)

export default IndexPage
