import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editStaff, getStaffById } from '../../redux/actions/staffActions'
import isEmpty from '../../validation/is-empty'

class EditStaff extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  componentDidMount() {
    this.props.getStaffById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }

    if (nextProps.staff.volunteer) {
      const staff = nextProps.staff.volunteer
      staff.name = !isEmpty(staff.name) ? staff.name : ''
      staff.email = !isEmpty(staff.email) ? staff.email : ''
      staff.phone = !isEmpty(staff.phone) ? staff.phone : ''
      // set state
      this.setState({
        name: staff.name,
        email: staff.email,
        phone: staff.phone
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const staffData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.editStaff(this.props.match.params.id, staffData, this.props.history)
  }

  render() {
    return (
      <div className="edit-form">
        <h1 className="edit-h1">Edit Staff</h1>
        <form onSubmit={this.onSubmit.bind(this)} className="edit-inputs">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={e => this.setState({phone: e.target.value})}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

EditStaff.propTypes = {
  editStaff: PropTypes.func.isRequired,
  getStaffById: PropTypes.func.isRequired,
  staff: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  staff: state.staff,
  auth: state.auth
})

export default connect(mapStateToProps, { editStaff, getStaffById })(EditStaff)