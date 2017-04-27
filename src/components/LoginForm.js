import React from 'react'
import '../assets/LoginForm.css'

const LoginForm = props => {
  const {email, password, text, error, handleSubmit, handleFieldChange} = props
  return (
    <form name="loginForm" onSubmit={handleSubmit}>
      <div className="form-group-collection">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleFieldChange}
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleFieldChange}
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

export default LoginForm
