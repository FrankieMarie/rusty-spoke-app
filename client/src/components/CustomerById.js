import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCustomerById } from '../redux/actions/customerActions'
import { connect } from 'react-redux'
import moment from 'moment'

class CustomerById extends Component {
  componentDidMount() {
    this.props.getCustomerById(this.props.match.params.id)
  }

  render() {
    let current;
    if(this.props.customer.customer){
      const {name, email, phone, workTradeHours, date, _id } = this.props.customer.customer
      return (
        current = (
          <div className="customer-by-id">

            <h2 className="name-by-id">{name}</h2>

            <ul className="customer-ul">

              <li className="customer-item">
                <p className="customer-info">
                  <small className="small">Email: </small>
                  <span className="customer-content">{email}</span>
                </p>
              </li>

              <li className="customer-item">
                <p className="customer-info">
                  <small className="small">Phone: </small>
                  <span className="customer-content">{phone}</span>
                </p>
              </li>

              <li className="customer-item">
                <p className="customer-info">
                  <small className="small">Work Trade: </small>
                  <span className="customer-content">{workTradeHours} hours</span>
                </p>
              </li>

              <li className="customer-item">
                <p className="customer-info">
                  <small className="small">Date Added: </small>
                  <span className="customer-content">{moment(date).format('MMMM D, YYYY')}</span>
                </p>
              </li>

            </ul>

            <a href={`/edit/${_id}`} className="customer-edit">
              <i className="fas fa-user-edit customer-edit-icon"></i> Edit
            </a>

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