import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteStaff } from '../../redux/actions/staffActions'

class Volunteer extends Component {
  onDeleteClick(e) {
    this.props.deleteStaff(this.props.staff._id)
  }
  render() {
    const {name, email, phone, _id} = this.props.staff
    return (
      <div className="individual-staff">
        <h2 className="staff-name">
          <i className="fas fa-angle-right"></i> {name}
        </h2>
        <div className="staff-info">
          <p><small>Email:</small> {email}</p>
          <p><small>Phone:</small> {phone}</p>
        </div>
        <div className="staff-btns">
          <a href={`/edit/${_id}`} className="staff-edit">
            <i className="fas fa-user-edit"></i> Edit
          </a>
          <button onClick={this.onDeleteClick.bind(this)} className="staff-delete">
            <i className="fas fa-user-times"></i> Delete
          </button>
        </div>
      </div>
    )
  }
}

Volunteer.propTypes = {
  deleteStaff: PropTypes.func.isRequired
}

export default connect(null, { deleteStaff })(Volunteer)