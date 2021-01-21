import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <HashRouter history={browserHistory}>
      <Route path='/' component={App} />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})
