import React, { Component } from 'react'

import Login from './auth/Login'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing-image"></div>
          <div className="login-box">
            <h1 className="login-h1">The Rusty Spoke</h1>
            <Login />
          </div>
      </div>
    )
  }
}

export default Landing