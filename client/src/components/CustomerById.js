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
          <div className="customer-by-id">
            <h2 className="name-by-id">{name}</h2>
              <p className="customer-info">
                <small className="small">Email:</small>
                <span>{email}</span>
              </p>
              <p className="customer-info">
                <small className="small">Phone:</small>
                <span>{phone}</span>
              </p>
              <p className="customer-info">
                <small className="small">Work Trade Hours:</small>
                <span>{workTradeHours}</span>
              </p>
              <div className="customer-info">
                <small className="small">Holds:</small>
              </div>
              <p className="customer-info">
                <small className="small">Date Added:</small>
                <span>{moment(date).format('MMMM D, YYYY')}</span>
              </p>
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