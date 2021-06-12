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
        team_season_stats: allTeamSeasons {
          team_id,
          season,
          num_games,
          fg_pct,
          fg3_pct,
          ft_pct
        }
      }
    }
  `);
  
  result.data.postgres.team_season_stats.forEach((team_season) => {
    createPage({
      path: slugifyPost(team_season),
      component: path.resolve(".src/templates/team-page.js"), 
      context: {
        teamSeason: `{team_season.team_id}_{team_season.season}`
      },
    });
  });
}
