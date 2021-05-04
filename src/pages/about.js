import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>About</h1>
    <p>Welcome to No TV Timeouts' about page. This website is run by me, Ford Higgins. My motivation was providing the same level of accessibility for basketball statistics to the Division III men's level (Her Hoop Stats already has the women's side covered!). I began working with advanced stats in college as a manager for Davidson College's men's team by compiling team stats from websites such as KenPom, hoop-math, and Synergy into reports for our coaching staff as they prepared for upcoming games. I continued working in basketball for a few years after college and saw several of my peers and coaches begin work at the Division III level at schools like Swarthmore, Vassar, and Macalester. My next step was learning the data trade as a data analyst, and I soon discovered the joy I got in making data accessible for others in order to amplify and accelerate their decision making processes.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
