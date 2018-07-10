import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCustomers } from '../redux/actions/customerActions'
import Hold from './layout/Hold'

class Holds extends Component {
  componentDidMount() {
    this.props.getAllCustomers()
  }
  render() {
    const { customers } = this.props.customers
    let allHolds;
    if (!customers) {
      allHolds = <div></div>
    } else {
      allHolds = customers.map(customer => customer.holds.map(hold => {
        return <Hold key={hold._id} hold={hold} customer={customer}/>
      }))
    }
    return (
      <div>
        <h1 className="holds-h1">Holds</h1>
        {allHolds}
      </div>
    )
  }
}

Holds.propTypes = {
  getAllCustomers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customers: state.customers,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllCustomers })(Holds)