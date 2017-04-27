import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/reducer'
import '../assets/LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
              onChange={e => this.setState({email: e.target.value})}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={e => this.setState({password: e.target.value})}
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

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
