import React from 'react'
import { Router, Link } from 'react-router-dom'

import Projects from './Projects'
import AboutMe from './AboutMe'

class Nav extends React.Component {
  render () {
    return (
      <Router>
      <div className="nav">
      <Link to='/AboutMe'>About Me</Link>
      <Projects />
      {/* <Blog /> */}

      </div>
      </Router>
    )
  }
}

export default Nav