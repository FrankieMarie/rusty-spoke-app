import React, { Component } from 'react'

class NewCustomer extends Component {
  render() {
    return (
      <div>
        <h1 className="customers-h1">New Customer</h1>
        <form className="new-customer-form">

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              type="text"
              className="new-customer-input"
            />
          </div>

          <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="new-customer-input"
          />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              className="new-customer-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="workTradeHours">Work Trade Hours</label>
            <input
              name="workTradeHours"
              type="number"
              className="new-customer-input"
              defaultValue="0"
            />
          </div>

          <button>Submit</button>

        </form>
      </div>
    )
  }
}

export default NewCustomer