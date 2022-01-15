import * as React from "react"
import Layout from "../components/layout"
import List from "../components/list"

import "./../styles/global.scss"

const IndexPage = () => (
  <main className="index-page">
    <Layout>
      <List />
    </Layout>
  </main>
)

export default IndexPage
