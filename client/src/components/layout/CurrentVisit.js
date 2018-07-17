import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class CurrentVisit extends Component {

  handleClick = (e) => {
    console.log('clicked')
  }
  render() {
    const { customer, arrived, departed, reason, worktrade, toolbox, _id } = this.props.visit
    if(!departed){
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

          <div className="visit-btns">
            <a href={`/edit-visit/${_id}`} className="visit-edit"><i className="fas fa-pencil-alt"></i> Edit Visit</a>
            <button className="customer-departed" onClick={this.handleClick.bind(this)}>Depart</button>
          </div>

        </ul>
      </div>
    )
  } else {
      return (
        <div></div>
      )
    }
  }
}

export default CurrentVisit