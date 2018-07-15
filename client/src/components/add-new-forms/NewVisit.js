import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCustomers } from '../../redux/actions/customerActions'
import { newVisit } from '../../redux/actions/currentVisitsActions'

class NewVisit extends Component {
  state = {
    customer: '',
    toolbox: '',
    worktrade: '',
    reason: '',
    arrived: Date.now(),
    departed: '',
    errors: {}
  }

  componentDidMount() {
    this.props.getAllCustomers()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newVisit(this.state, this.props.history)
  }

  render() {
    const { customers } = this.props.customers
    let customerNames;
    if (customers) {
      customerNames = customers.map(customer => <option key={customer._id} value={customer._id}>{customer.name}</option>)
    }
    return (
      <div className="edit-form">

        <h1 className="new-visit-h1">New Visit</h1>

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
              <option>Select Customer:</option>
              {customerNames}
            </select>
          </div>

          <div className="input-group custom-select">
            <label
              htmlFor="toolbox"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Toolbox
            </label>
            <select
              className="styled-select"
              name="toolbox"
              value={this.state.toolbox}
              onChange={e => this.setState({toolbox: e.target.value})}
            >
              <option>Select Toolbox:</option>
              <option>Red</option>
              <option>Black</option>
              <option>Green</option>
              <option>Blue</option>
              <option>None</option>
            </select>
          </div>

          <div className="input-group custom-select">
            <label
              htmlFor="worktrade"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Worktrade?
            </label>
            <select
              className="styled-select"
              name="worktrade"
              value={this.state.worktrade}
              onChange={e => this.setState({worktrade: e.target.value})}
            >
              <option>Select:</option>
              <option>true</option>
              <option>flase</option>
            </select>
          </div>

          <div className="input-group">
            <label
              htmlFor="reason"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Reason for visit
            </label>
            <input
              className="form-input"
              name="reason"
              type="text"
              value={this.state.reason}
              onChange={e => this.setState({reason: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="departed"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Departed
            </label>
            <input
              className="form-input"
              name="departed"
              type="date"
              value={this.state.departed}
              onChange={e => this.setState({departed: e.target.value})}
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

export default connect(mapStateToProps, { getAllCustomers, newVisit })(NewVisit)