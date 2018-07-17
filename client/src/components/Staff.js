import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllStaff } from '../redux/actions/staffActions'
import Volunteer from './layout/Volunteer'

class Staff extends Component {
  componentDidMount() {
    this.props.getAllStaff()
  }

  render() {
    const { staff } = this.props.staff
    let allStaff;
    if (!staff) {
      allStaff = <div></div>
    } else {
      console.log(staff);
      allStaff = staff.map(volunteer => <Volunteer key={volunteer._id} staff={volunteer} />)
    }
    return (
      <div>
        <h1 className="staff-h1">Staff</h1>
        <div className="all-staff" style={{marginBottom: "6rem"}}>
          {allStaff}
        </div>
        <footer className="staff-footer" >
          <Link to="/new-staff" className="new-staff-link" >
            <i className="fas fa-user-plus"></i> New Staff
          </Link>
        </footer>
      </div>
    )
  }
}

Staff.propTypes = {
  getAllStaff: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  staff: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  staff: state.staff,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllStaff })(Staff)