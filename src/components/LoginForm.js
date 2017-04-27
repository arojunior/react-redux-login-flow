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
    let {text, error} = this.props.Login
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
          {text}
          {error && error.message}
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  Login: state
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
