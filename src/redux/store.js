import {createStore, applyMiddleware} from 'redux'
import fetchMiddleware from 'fetch-middleware'
import logger from 'redux-logger'
import Login from './reducer'

const store = createStore(Login, {}, applyMiddleware(fetchMiddleware, logger))
export default store
