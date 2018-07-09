import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class Dashboard extends Component {
  render() {
    return (
      <div className="content">

        <h1 className="welcome-h1">Welcome to the spoke!</h1>

        <div className="dashboard-btns">

          <div className="btn-container-left">
          <i className="fas fa-angle-double-down dash-icon"></i>
            <Link
              to="/new-shift"
              className="new-shift-btn">
              Start Shift
            </Link>
          </div>

          <div className="btn-container-right">
            <i className="fas fa-angle-double-down dash-icon"></i>
            <Link
              to="/new-visit"
              className="new-visit-btn">
              Create Visit
            </Link>
          </div>

        </div>

        <div className="date-time">
          {moment(Date.now()).format('MMMM D, YYYY, H:mm a')}
        </div>

      </div>
    )
  }
}

export default Dashboard