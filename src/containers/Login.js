import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/reducer'
import LoginForm from '../components/LoginForm'

class Login extends Component {
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
      <div>
        <LoginForm
          handleFieldChange={this.handleFieldChange}
          password={password}
          email={email}
          handleSubmit={this.handleSubmit}
          text={text}
          error={error}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Login: state
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
