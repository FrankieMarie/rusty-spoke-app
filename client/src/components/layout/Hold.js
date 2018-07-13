import React, { Component } from 'react'
import moment from 'moment'

class Hold extends Component {
  render() {
    const { customer, item, description, date, completed } = this.props.hold
    return (
      <div className="hold-container">
        <p>Customer: {customer.name}</p>
        <p>Date created: {moment(date).format('MMMM D, YYYY')}</p>
        <p>Item: {item}</p>
        <p>Description: {description}</p>
        <p>Completed: {completed.toString()}</p>
      </div>
    )
  }
}

export default Hold