import React, { Component } from 'react'
import moment from 'moment'

class Purchase extends Component {
  render() {
    const { date, customer, costHours, costCash, item, description } = this.props.purchase
    return (
      <div>
        <p>Date of Purchase: {moment(date).format('MMMM D, YYYY, H:mm a')}</p>
        <p>Customer: {customer.name}</p>
        <p>Cost Hours: {costHours}</p>
        <p>Cost Cash: {costCash}</p>
        <p>Item: {item}</p>
        <p>Description: {description}</p>
      </div>
    )
  }
}

export default Purchase