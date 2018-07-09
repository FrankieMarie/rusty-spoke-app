import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCustomerById } from '../redux/actions/customerActions'
import { connect } from 'react-redux'
import moment from 'moment'

import Hold from './layout/Hold'

class CustomerById extends Component {
  componentDidMount() {
    this.props.getCustomerById(this.props.match.params.id)
  }

  render() {
    let current;
    if(this.props.customer.customer){
      const {name, email, phone, workTradeHours, holds, date} = this.props.customer.customer
      holds.map(hold => <Hold key={hold.id} hold={hold} />)
      return (
        current = (
          <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Work Trade Hours: {workTradeHours}</p>
            <div>Holds: </div>
            <p>Date Added: {moment(date).format('MMMM D, YYYY')}</p>
          </div>
        )
      )
    }
    return (
      <div >
        {current}
      </div>
    )
  }
}

CustomerById.propTypes = {
  getCustomerById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customers,
  auth: state.auth
})

export default connect(mapStateToProps, { getCustomerById })(CustomerById)