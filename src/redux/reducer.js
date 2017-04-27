import {createAction} from 'redux-actions'

const SET_LOGIN_PENDING = 'modules/Login/PENDING'
const SET_LOGIN_SUCCESS = 'modules/Login/SUCCESS'
const SET_LOGIN_ERROR = 'modules/Login/ERROR'

const setLoginPending = createAction(SET_LOGIN_PENDING)
const setLoginSuccess = createAction(SET_LOGIN_SUCCESS)
const setLoginError = createAction(SET_LOGIN_ERROR)

export const login = (email, password) => dispatch => {
  dispatch(setLoginPending(true))
  dispatch(setLoginSuccess(false))
  dispatch(setLoginError(null))

  callLoginApi(email, password, error => {
    dispatch(setLoginPending(false))
    if (!error) {
      dispatch(setLoginSuccess(true))
    } else {
      dispatch(setLoginError(error))
    }
  })
}

const callLoginApi = (email, password, callback) => {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null)
    } else {
      return callback(new Error('Invalid email and password'))
    }
  }, 1000)
}

const initalState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.payload
      }
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload
      }

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      }

    default:
      return state
  }
}
