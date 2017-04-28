import {createAction, handleActions} from 'redux-actions'

import {SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR} from './actions'

const initalState = {
  requestPending: false,
  text: null,
  error: false
}

const reducer = handleActions(
  {
    [SET_LOGIN_PENDING]: (state, action) => ({
      ...state,
      requestPending: true,
      text: 'Please wait...',
      error: false
    }),
    [SET_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      requestPending: false,
      text: 'Success',
      error: false
    }),
    [SET_LOGIN_ERROR]: (state, action) => ({
      ...state,
      requestPending: false,
      text: null,
      error: action.payload
    })
  },
  initalState
)

export default reducer
