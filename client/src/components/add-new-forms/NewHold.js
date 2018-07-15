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
      <div className="edit-form">
        <h1 className="purchases-h1">New Hold</h1>

        <form onSubmit={this.handleSubmit.bind(this)} className="edit-inputs">

          <div className="input-group custom-select">
            <label
              htmlFor="customer"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Customer
            </label>
            <select
              className="styled-select"
              name="customer"
              value={this.state.customer}
              onChange={e => this.setState({customer: e.target.value})}
            >
              <option className="option">Select Customer</option>
              {customerNames}
            </select>
          </div>

          <div className="input-group">
            <label
              htmlFor="item"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Item
            </label>
            <input
              className="form-input"
              name="item"
              type="text"
              value={this.state.item}
              onChange={e => this.setState({item: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="description"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Description
            </label>
            <input
              className="form-input"
              name="description"
              type="text"
              value={this.state.description}
              onChange={e => this.setState({description: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="completed"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Completed?
            </label>
            <input
              className="form-input"
              name="completed"
              type="boolean"
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