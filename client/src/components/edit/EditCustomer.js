import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editCustomer } from '../../redux/actions/customerActions'

class EditCustomer extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    workTradeHours: ''
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="edit-form">
        <h1 className="edit-h1">Edit Customer</h1>
        <form onSubmit={this.onSubmit.bind(this)} className="edit-inputs">
        <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={e => this.setState({phone: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="workTradeHours">Work Trade Hours</label>
            <input
              type="text"
              name="workTradeHours"
              value={this.state.workTradeHours}
              onChange={e => this.setState({workTradeHours: e.target.value})}
            />
          </div>

          <button>Update</button>
        </form>
      </div>
    )
  }
}

EditCustomer.propTypes = {
  editCustomer: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired
}

export default connect(null, { editCustomer })(EditCustomer)