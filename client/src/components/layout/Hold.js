import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class Hold extends Component {
  render() {
    const { customer, item, description, date, completed, _id } = this.props.hold
    return (
      <ul className="hold">

        <li className="hold-item">
          <p className="hold-info">
            <small className="small">Customer:</small>
            <Link to={`/customers/${customer._id}`} className="hold-content hold-name">{customer.name}</Link>
          </p>
        </li>

        <li className="hold-item">
          <p className="hold-info">
            <small className="small">Date created:</small>
            <span className="hold-content">{moment(date).format('MMMM D, YYYY')}</span>
          </p>
        </li>

        <li className="hold-item">
          <p className="hold-info">
            <small className="small">Item:</small>
            <span className="hold-content">{item}</span>
          </p>
        </li>

        <li className="hold-item">
          <p className="hold-info">
            <small className="small">Description:</small>
            <span className="hold-content">{description}</span>
          </p>
        </li>

        <li className="hold-item">
          <p className="hold-info">
            <small className="small">Completed:</small>
            <span className="hold-content">{completed.toString()}</span>
          </p>
        </li>

        <div className="hold-btns">
          <a href={`/edit-hold/${_id}`} className="hold-edit">
            <i className="fas fa-edit hold-edit-icon"></i> Edit
          </a>

          <button className="hold-delete">
            <i className="fas fa-times delete-hold-icon"></i>
          </button>
        </div>


      </ul>
    )
  }
}

export default Hold