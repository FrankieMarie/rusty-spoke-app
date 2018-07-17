import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCustomer } from '../../redux/actions/customerActions'

class Customer extends Component {
  onDeleteClick(e) {
    this.props.deleteCustomer(this.props.customer._id)
  }
  render() {
    const { name, _id } = this.props.customer
    return (
      <div className="customer">

        <h2>
          <Link to={`/customers/${_id}`} className="customer-name">
            <i className="fas fa-caret-right"></i> {name}
          </Link>
        </h2>

        <div className="links">
          <Link to="/new-visit" className="customer-links">Create new visit</Link>
          <a href={`/edit/${_id}`} className="customer-edit">
            <i className="fas fa-user-edit"></i> Edit
          </a>
          <button onClick={this.onDeleteClick.bind(this)} className="customer-delete">
            <i className="fas fa-times"></i>
          </button>
        </div>

      </div>
    )
  }
}

Customer.propTypes = {
  deleteCustomer: PropTypes.func.isRequired
}

export default connect(null, { deleteCustomer })(Customer)