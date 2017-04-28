import {createAction} from 'redux-actions'

export const SET_LOGIN_PENDING = 'modules/Login/PENDING'
export const SET_LOGIN_SUCCESS = 'modules/Login/SUCCESS'
export const SET_LOGIN_ERROR = 'modules/Login/ERROR'

const loginPending = createAction(SET_LOGIN_PENDING)
const loginSuccess = createAction(SET_LOGIN_SUCCESS)
const loginError = createAction(SET_LOGIN_ERROR)

const fakeLoginApi = values => {
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
    data: () => fakeLoginApi(values)
  }
})
