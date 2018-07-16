import React, { Component } from 'react'
import moment from 'moment'

class Purchase extends Component {
  render() {
    const { date, customer, costHours, costCash, item, description, _id } = this.props.purchase
    return (
      <ul className="purchase">

        <li className="purchase-item">
          <p className="purchase-info">
            <small className="small">Date of Purchase:</small>
            <span className="purchase-content">{moment(date).format('MMMM D, YYYY, H:mm a')}</span>
          </p>
        </li>

        <li className="purchase-item">
          <p className="purchase-info">
            <small className="small">Customer</small>
            <span className="purchase-content">{customer.name}</span>
          </p>
        </li>

        <li className="purchase-item">
          <p className="purchase-info">
            <small className="small">Item</small>
            <span className="purchase-content">{item}</span>
          </p>
        </li>

        <li className="purchase-item">
          <p className="purchase-info">
            <small className="small">Description</small>
            <span className="purchase-content">{description}</span>
          </p>
        </li>

        <li className="purchase-item">
          <p className="purchase-info">
            <small className="small">Cost Hours</small>
            <span className="purchase-content">{costHours}</span>
          </p>
        </li>

        <li className="purchase-item">
          <p className="purchase-info">
            <small className="small">Cost Cash</small>
            <span className="purchase-content">{costCash}</span>
          </p>
        </li>

        <div className="shift-btns">
          <a href={`/edit-purchase/${_id}`} className="shift-edit"><i className="fas fa-pencil-alt"></i> Edit Purchase</a>
        </div>

      </ul>
    )
  }
}

export default Purchase