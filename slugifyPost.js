// taken from https://github.com/graphile/gatsby-source-pg-example/blob/master/slugifyPost.js
const slugify = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "") || "untitled"

module.exports = post => `/post/${post.id}-${slugify(post.title)}`
