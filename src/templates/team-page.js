// template for each team's page
// reference: https://github.com/graphile/gatsby-source-pg-example/blob/master/src/templates/blog-post.js
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";

const teamPage = ({ data }) => {
  const { teamStats } = data.postgres;
  // add table
  return (
    <Layout>
      <div>
        <h1>{teamStats.id} - {teamStats.season}</h1>
        <table>
        </table>
      </div>
    </Layout>
  );
};

export default teamPage;

export const query = graphql`
  query () {
  }
`;
