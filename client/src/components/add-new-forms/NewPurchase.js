import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCustomers } from '../../redux/actions/customerActions'
import { newPurchase } from '../../redux/actions/purchaseActions'

class NewPurchase extends Component {
  state = {
    customer: '',
    item: '',
    description: '',
    costHours: '',
    costCash: ''
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
        <h1 className="purchases-h1">New Purchase</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="new-purchase-form">

          <div className="input-group">
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
              <option>Select Customer:</option>
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
              htmlFor="costHours"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Cost Hours
            </label>
            <input
              className="form-input"
              name="costHours"
              type="number"
              value={this.state.costHours}
              onChange={e => this.setState({costHours: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="costCash"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Cost Cash
            </label>
            <input
              className="form-input"
              name="costCash"
              type="number"
              value={this.state.costCash}
              onChange={e => this.setState({costCash: e.target.value})}
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

export default connect(mapStateToProps, { getAllCustomers, newPurchase })(NewPurchase)