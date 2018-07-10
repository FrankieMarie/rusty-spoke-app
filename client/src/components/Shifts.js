import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllShifts } from '../redux/actions/shiftActions'
import Shift from './layout/Shift'

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
        {allShifts}
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