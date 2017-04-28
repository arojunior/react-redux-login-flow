import {createStore, applyMiddleware, compose} from 'redux'
import fetchMiddleware from 'fetch-middleware'
import logger from 'redux-logger'
import Login from './reducer'

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

export const store = createStore(
  Login,
  {},
  compose(applyMiddleware(fetchMiddleware, logger), devTools)
)
