import React, { Component } from 'react'
import moment from 'moment'

class CurrentVisit extends Component {
  render() {
    const { customer, arrived, departed, reason, worktrade, toolbox } = this.props.visit
    return (
      <div className="visit">
        <p className="visit-name"><i className="far fa-check-circle"></i> {customer.name}</p>
        <p><small className="small">Arrived:</small> {moment(arrived).format('MMMM D, YYYY, H:mm a')}</p>
        {departed ? <small className="small"><p>Departed: {moment(departed).format('MMMM D, YYYY, H:mm a')}</p></small> : null}
        <p><small className="small">Reason:</small> {reason}</p>
        <p><small className="small">Toolbox:</small> {toolbox}</p>
        <p><small className="small">Worktrade:</small> {worktrade}</p>
      </div>
    )
  }
}

export default CurrentVisit