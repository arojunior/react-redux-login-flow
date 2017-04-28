import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import LoginForm from './containers/Login'
import store from './redux/store'

render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
)
