import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/reducer'
import '../assets/LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let {email, password} = this.state
    this.props.login(email, password)
    this.setState({
      email: '',
      password: ''
    })
  }

  handleFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let {email, password} = this.state
    let {isLoginPending, isLoginSuccess, loginError} = this.props
    return (
      <form name="loginForm" onSubmit={this.handleSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleFieldChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleFieldChange}
              value={password}
            />
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          {isLoginPending && <div>Please wait...</div>}
          {isLoginSuccess && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isLoginPending: state.isLoginPending,
  isLoginSuccess: state.isLoginSuccess,
  loginError: state.loginError
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
