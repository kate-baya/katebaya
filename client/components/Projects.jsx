import React from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from '../actions'

export class Projects extends React.Component {
  state = {
    projects: []
  }

  componentDidMount () {
    this.props.dispatch(fetchProjects())
  }

  render () {
    return (
      <div className='projects'>
        <h1>Projects</h1>
        <ul>
          {this.props.projects.map(project => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects)