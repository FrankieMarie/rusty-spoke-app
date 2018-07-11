import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Customer extends Component {
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
          <Link to={`/customers/holds/${_id}`} className="customer-links">Place a hold</Link>
          <button className="customer-edit">
            <i className="fas fa-user-edit"></i> Edit
          </button>
          <button className="customer-delete">
            <i className="fas fa-user-times"></i> Delete
          </button>
        </div>

      </div>
    )
  }
}

export default Customer