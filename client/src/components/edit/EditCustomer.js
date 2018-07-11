import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editCustomer, getCustomerById } from '../../redux/actions/customerActions'
import isEmpty from '../../validation/is-empty'

class EditCustomer extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    workTradeHours: '',
    errors: {}
  }

  componentDidMount() {
    this.props.getCustomerById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }

    if (nextProps.customer.customer) {
      const customer = nextProps.customer.customer
      customer.name = !isEmpty(customer.name) ? customer.name : ''
      customer.email = !isEmpty(customer.email) ? customer.email : ''
      customer.phone = !isEmpty(customer.phone) ? customer.phone : ''
      customer.workTradeHours = !isEmpty(customer.workTradeHours) ? customer.workTradeHours : ''
      // set state
      this.setState({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        workTradeHours: customer.workTradeHours
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const customerData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      workTradeHours: this.state.workTradeHours
    }
    console.log('customer data',customerData)
    this.props.editCustomer(this.props.match.params.id, customerData, this.props.history)
  }

  render() {
    if(this.props.customer.customer){
      const {name, email, phone, workTradeHours} = this.props.customer.customer
    }

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

          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

EditCustomer.propTypes = {
  editCustomer: PropTypes.func.isRequired,
  getCustomerById: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customers,
  auth: state.auth
})

export default connect(mapStateToProps, { editCustomer, getCustomerById })(EditCustomer)