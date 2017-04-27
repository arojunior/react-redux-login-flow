import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './containers/Login'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
)
