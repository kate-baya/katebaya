import { getFruits } from '../apis/fruits'
import { getProjects } from '../apis/projects'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_PROJECTS = 'SET_PROJECTS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

export function setProjects (projects) {
  return {
    type: SET_PROJECTS,
    projects
  }
}

export function fetchProjects () {
  return dispatch => {
    return getProjects()
    .then(projects => {
      dispatch(setProjects(projects))
      return null
    })
  }
}
