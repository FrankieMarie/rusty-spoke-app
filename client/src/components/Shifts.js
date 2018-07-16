import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllShifts } from '../redux/actions/shiftActions'
import Shift from './layout/Shift'
import { Link } from 'react-router-dom'

class Shifts extends Component {
  componentDidMount() {
    this.props.getAllShifts()
  }
  render() {
    const { shifts } = this.props.shifts
    let allShifts;
    if (!shifts) {
      allShifts = <div></div>
    } else {
      allShifts = shifts.map(shift => <Shift key={shift._id} shift={shift} />)
    }
    return (
      <div>
        <h1 className="shifts-h1">Shifts</h1>
        <div
          className="all-shifts"
          style={{marginBottom: "6rem"}}>
          {allShifts}
        </div>
        <footer className="staff-footer" >
          <Link to="/new-shift" className="new-staff-link" >
            <i className="far fa-clock"></i> Start Shift
          </Link>
        </footer>
      </div>
    )
  }
}

Shifts.propTypes = {
  getAllShifts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  shifts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  shifts: state.shifts,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllShifts })(Shifts)