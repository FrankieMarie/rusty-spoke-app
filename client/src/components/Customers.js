import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCustomers } from '../redux/actions/customerActions'
import Customer from './layout/Customer'

class Customers extends Component {
  componentDidMount() {
    this.props.getAllCustomers()
  }

  render() {
    const { customers } = this.props.customers
    let allCustomers;
    if (!customers) {
      allCustomers = <div></div>
    } else {
      allCustomers = customers.map(customer => <Customer key={customer._id} customer={customer} />)
    }
    return (
      <div className="all-customers">
        {allCustomers}
      </div>
    )
  }
}

Customers.propTypes = {
  getAllCustomers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customers: state.customers,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllCustomers })(Customers)