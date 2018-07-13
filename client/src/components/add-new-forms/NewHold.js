import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCustomers } from '../../redux/actions/customerActions'

class NewHold extends Component {
  state = {
    customer: '',
    item: '',
    description: '',
    completed: ''
  }

  componentDidMount() {
    this.props.getAllCustomers()
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { customers } = this.props.customers
    let customerNames;
    if (customers) {
      customerNames = customers.map(customer => <option key={customer._id} value={customer._id}>{customer.name}</option>)
    }
    return (
      <div>
        <h1 className="purchases-h1">New Hold</h1>

        <form onSubmit={this.handleSubmit.bind(this)} className="new-purchase-form">

          <div className="input-group">
            <label htmlFor="customer">Customer</label>
            <select
              name="customer"
              value={this.state.customer}
              onChange={e => this.setState({customer: e.target.value})}
            >
              <option>Select Customer:</option>
              {customerNames}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="item">Item</label>
            <input
              name="item"
              type="text"
              value={this.state.item}
              onChange={e => this.setState({item: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={e => this.setState({description: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="completed">Completed?</label>
            <input
              name="completed"
              type="boolean"
              className="new-customer-input"
              value={this.state.completed}
              onChange={e => this.setState({completed: e.target.value})}
            />
          </div>

          <button className="login-btn new-visit-submit">Submit</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  customers: state.customers,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllCustomers })(NewHold)