import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>No TV Timeouts</h1>
    <p>Welcome to my site for D3 men's basketball statistics. I created it to fill in the stats gap for Division III hoops and was inspired by <a href="https://www.kenpom.com">KenPom</a>, <a href="https://www.barttorvik.com">barttorvik</a>, and <a href="https://www.herhoopstats.com">Her Hoop Stats</a>.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/about/">Go to my about page.</Link> <br />
      <Link to="/using-advanced-stats/">Go to "Using advanced stats"</Link>
    </p>
  </Layout>
)

export default IndexPage
