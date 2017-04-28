import {createAction, handleActions} from 'redux-actions'

const SET_LOGIN_PENDING = 'modules/Login/PENDING'
const SET_LOGIN_SUCCESS = 'modules/Login/SUCCESS'
const SET_LOGIN_ERROR = 'modules/Login/ERROR'

const loginPending = createAction(SET_LOGIN_PENDING)
const loginSuccess = createAction(SET_LOGIN_SUCCESS)
const loginError = createAction(SET_LOGIN_ERROR)

const callLoginApi = values => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.email !== 'admin@example.com' || values.password !== 'admin') {
        return reject(new Error('Invalid email and password'))
      }
      return resolve(true)
    }, 1000)
  })
}

export const login = values => ({
  type: [loginPending, loginSuccess, loginError],
  payload: {
    data: () => callLoginApi(values)
  }
})

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
