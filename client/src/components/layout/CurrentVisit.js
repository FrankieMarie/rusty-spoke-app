import React, { Component } from 'react'
import moment from 'moment'

class CurrentVisit extends Component {
  render() {
    const { customer, arrived, departed, reason, worktrade, toolbox } = this.props.visit
    return (
      <div>
        <p>{customer.name}</p>
        <p>Arrived: {moment(arrived).format('MMMM D, YYYY, H:mm a')}</p>
        {departed ? <p>Departed: {moment(departed).format('MMMM D, YYYY, H:mm a')}</p> : null}
        <p>Reason: {reason}</p>
        <p>Toolbox: {toolbox}</p>
        <p>Worktrade: {worktrade}</p>
      </div>
    )
  }
}

export default CurrentVisit