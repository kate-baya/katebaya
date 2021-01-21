import React from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from '../actions'

export class Projects extends React.Component {
  state = {
    projects: [],
    projectNav: false
  }

  componentDidMount () {
    this.props.dispatch(fetchProjects())
  }

  handleClick = e => {
    e.preventDefault
    this.setState({
      projectNav: true
    })
  }

  handleLeave = e => {
    e.preventDefault
    this.setState({
      projectNav: false
    })
  }

  render () {
    return (
      <div className='projects' onMouseEnter={this.handleClick} onMouseLeave={this.handleLeave}>
        <h1><a href='#' >Projects</a></h1>
        <ul>
          {this.state.projectNav && this.props.projects.map(project => (
            <li key={project}><a href={project}>{project}</a></li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects)