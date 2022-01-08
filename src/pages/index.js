import * as React from "react"
import Layout from "../components/layout"
import List from "../components/list"

import "./../styles/global.scss"

const IndexPage = () => (
  <main>
    <Layout>
      <div className="content" style={{ maxWidth: "120rem" }}>
        <List />
      </div>
    </Layout>
  </main>
)

export default IndexPage
