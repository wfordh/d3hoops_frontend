// template for each season's home page
// reference: https://github.com/graphile/gatsby-source-pg-example/blob/master/src/templates/blog-post.js
import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const seasonPage = () => (
  // add table
  <Layout>
    <Seo title="test season" />
    <div>
      <h1>Season</h1>
      <table>
        <thead>
          <tr class="seasonTableHeaderRow">
            <th>Season</th>
            <th>Team ID</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>FT%</th>
          </tr>
        </thead>
        <tbody class="seasonTableBody">
          <tr class="seasonTableBodyRow">
            <td>2020</td>
            <td>1</td>
            <td>45.0</td>
            <td>35.7</td>
            <td>77.7</td>
          </tr>
          <tr class="seasonTableBodyRow">
            <td>2021</td>
            <td>8</td>
            <td>43.8</td>
            <td>37.1</td>
            <td>77.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default seasonPage
