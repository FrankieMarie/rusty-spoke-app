import React, { Component } from 'react'

class Landing extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="landing-image"></div>
          <div className="login-box">
            <h1 className="login-h1">The Rusty Spoke</h1>
            <form className="input-group" onSubmit={this.onSubmit.bind(this)}>
              <input
                name="email"
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
              />
              {/* <label htmlFor="email" className="input-label">Email</label> */}
              <input
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
              />
              {/* <label htmlFor="password" className="input-label">Password</label> */}
              <button className="login-btn">Enter</button>
            </form>
          </div>
      </div>
    )
  }
}

export default Landing