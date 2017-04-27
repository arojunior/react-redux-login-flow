import {createAction} from 'redux-actions'

const SET_LOGIN_PENDING = 'modules/Login/PENDING'
const SET_LOGIN_SUCCESS = 'modules/Login/SUCCESS'
const SET_LOGIN_ERROR = 'modules/Login/ERROR'

const setLoginPending = createAction(SET_LOGIN_PENDING)
const setLoginSuccess = createAction(SET_LOGIN_SUCCESS)
const setLoginError = createAction(SET_LOGIN_ERROR)

const callLoginApi = (email, password, callback) => {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null)
    } else {
      return callback(new Error('Invalid email and password'))
    }
  }, 1000)
}

export const login = (email, password) => dispatch => {
  dispatch(setLoginPending())

  callLoginApi(email, password, error => {
    if (error) {
      return dispatch(setLoginError(error))
    }
    dispatch(setLoginSuccess())
  })
}

const initalState = {
  requestPending: false,
  text: null,
  error: false
}

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        text: 'Please wait...',
        requestPending: true
      }
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        text: 'Success',
        requestPending: false
      }

    case SET_LOGIN_ERROR:
      return {
        ...state,
        requestPending: false,
        text: null,
        error: action.payload
      }

    default:
      return state
  }
}
