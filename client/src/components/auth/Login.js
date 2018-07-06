import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/authActions'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentWillMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history)
  }

  render() {
    const { errors } = this.state

    return (
      <form className="input-group" onSubmit={this.onSubmit.bind(this)}>
        <input
          name="email"
          type="email"
          className={classnames('input-item', {
            'is-invalid': errors.email
          })}
          placeholder="email"
          value={this.state.email}
          onChange={e => this.setState({email: e.target.value})}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
        <input
          name="password"
          type="password"
          className={classnames('input-item', {
            'is-invalid': errors.password
          })}
          placeholder="password"
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
        <button className="login-btn">Enter</button>
      </form>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))