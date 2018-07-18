import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCustomer } from '../../redux/actions/customerActions'

class NewCustomer extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    workTradeHours: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCustomer(this.state, this.props.history)
  }

  render() {
    return (
      <div>
        <h1 className="customers-h1">New Customer</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="new-customer-form">

          <div className="input-group">
            <label
              htmlFor="name"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="form-input"
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
            name="email"
            type="email"
            className="form-input"
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
              name="phone"
              type="text"
              className="form-input"
              value={this.state.phone}
              onChange={e => this.setState({phone: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="workTradeHours"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Work Trade Hours
            </label>
            <input
              name="workTradeHours"
              type="number"
              className="form-input"
              value={this.state.workTradeHours}
              onChange={e => this.setState({workTradeHours: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="new-customer-btn"
            style={{cursor: "pointer"}}>
            Submit
          </button>

        </form>
      </div>
    )
  }
}

NewCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired
}

export default connect(null, { addCustomer })(NewCustomer)