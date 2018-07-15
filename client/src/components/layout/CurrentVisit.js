import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class CurrentVisit extends Component {
  render() {
    const { customer, arrived, departed, reason, worktrade, toolbox } = this.props.visit
    return (
      <div className="visit">

        <p className="visit-name">
          <Link to={`/customers/${customer._id}`} className="visit-content visit-name">
          <i className="far fa-check-circle"></i> {customer.name}
          </Link>
        </p>


        <ul className="visit-ul">

          <li className="visit-item">
            <p className="visit-info">
              <small className="small">Arrived:</small>
              <span className="visit-content">{moment(arrived).format('MMMM D, YYYY, H:mm a')}</span>
            </p>
          </li>

          <li className="visit-item">
            <p className="visit-info">
              <small className="small">Reason:</small>
              <span className="visit-content">{reason}</span>
            </p>
          </li>

          <li className="visit-item">
            <p className="visit-info">
              <small className="small">Toolbox:</small>
              <span className="visit-content">{toolbox}</span>
            </p>
          </li>

          <li className="visit-item">
            <p className="visit-info">
              <small className="small">Worktrade:</small>
              <span className="visit-content">{worktrade}</span>
            </p>
          </li>

          {departed ? <li className="visit-item"><p><small className="small">Departed:</small> <span className="visit-content">{moment(departed).format('MMMM D, YYYY, H:mm a')}</span></p></li> : null}

        </ul>
      </div>
    )
  }
}

export default CurrentVisit