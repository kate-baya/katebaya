import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Wip from './Wip'
import Updates from './Updates'

export default function App () {
  return (
    <Router>
      <Nav/>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-head">
        </div>
        <div className="hero-body  has-text-justified">
          <Route path='/contact' component={Contact}/>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/wip' component={Wip}/>
          <Route path='/updates' component={Updates}/>
        </div>
        <div className="hero-foot">
        </div>
      </section>
    </Router>
  )
}
