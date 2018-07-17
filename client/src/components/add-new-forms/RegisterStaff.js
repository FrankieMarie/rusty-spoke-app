import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addStaff } from '../../redux/actions/staffActions'

class RegisterStaff extends Component {
  state = {
      name: '',
      email: '',
      phone: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addStaff(this.state, this.props.history)
  }

  render() {
    return (
      <div className="edit-form">
        <h1 className="purchases-h1">New Staff</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="edit-inputs">

          <div className="input-group">
            <label
              htmlFor="name"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Full Name
            </label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="email"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Email
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="phone"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Phone
            </label>
            <input
              className="form-input"
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={e => this.setState({phone: e.target.value})}
            />
          </div>
          <button type="submit" className="update-shift-btn">Submit</button>
        </form>
      </div>
    )
  }
}

RegisterStaff.propTypes = {
  addStaff: PropTypes.func.isRequired
}

export default connect(null, { addStaff })(RegisterStaff)