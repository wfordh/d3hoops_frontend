/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const slugifyPost = require("./slugifyPost")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      postgres {
        }
      }
    }
  `)
}
