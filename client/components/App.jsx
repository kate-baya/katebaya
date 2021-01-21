import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchFruits } from '../actions'

import Nav from './Nav'
import AboutMe from './AboutMe'

import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <div className='app'>
        <h1>Kate Baya Coding</h1>
        <Nav />
        <div>
          <p>
            Welcome to my coding blog! Here you will find more about myself and what I have been working on. Please get in touch if you have any questions!
          </p>
        </div>
        <Route path='/AboutMe' component={AboutMe} />
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
