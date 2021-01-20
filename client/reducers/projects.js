import { SET_PROJECTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    default:
      return state  
  }
}

export default reducer
