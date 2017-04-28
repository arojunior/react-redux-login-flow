import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {login} from '../redux/actions'
import LoginForm from '../components/LoginForm'

const emptyForm = () => ({
  email: '',
  password: ''
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = emptyForm()
  }

  handleSubmit = e => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.login({email, password})
    this.setState(emptyForm)
  }

  handleFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {email, password} = this.state
    const {text, error} = this.props.Login
    return (
      <div>
        <LoginForm
          handleFieldChange={this.handleFieldChange}
          handleSubmit={this.handleSubmit}
          password={password}
          email={email}
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

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
