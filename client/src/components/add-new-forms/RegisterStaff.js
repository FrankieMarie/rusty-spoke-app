import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerStaff } from '../../redux/actions/staffActions'

class RegisterStaff extends Component {
  state = {
      name: '',
      email: '',
      phone: ''
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.registerStaff(newUser)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
          />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            type="text"
            placeholder="phone"
            value={this.state.phone}
            onChange={e => this.setState({phone: e.target.value})}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

RegisterStaff.propTypes = {
  registerStaff: PropTypes.func.isRequired
}

export default connect(null, { registerStaff })(RegisterStaff)