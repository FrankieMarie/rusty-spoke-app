import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editShift, getShiftById } from '../../redux/actions/shiftActions'
import isEmpty from '../../validation/is-empty'
//import moment from 'moment'

class EditShift extends Component {
  state = {
    end: Date.now(),
    floatStart: '',
    floatEnd: '',
    staff: '',
    errors: {}
  }

  componentDidMount() {
    this.props.getShiftById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }

    if (nextProps.shift.shift) {
      const shift = nextProps.shift.shift
      shift.end = !isEmpty(shift.end) ? shift.end : Date.now()
      shift.floatStart = !isEmpty(shift.floatStart) ? shift.floatStart : ''
      shift.floatEnd = !isEmpty(shift.floatEnd) ? shift.floatEnd : ''
      shift.staff = !isEmpty(shift.staff) ? shift.staff : ''
      // set state
      this.setState({
        end: shift.end,
        floatStart: shift.floatStart,
        floatEnd: shift.floatEnd,
        staff: shift.staff
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const shiftData = {
      end: this.state.end,
      floatStart: this.state.floatStart,
      floatEnd: this.state.floatEnd,
      staff: this.state.staff
    }
    this.props.editShift(this.props.match.params.id, shiftData, this.props.history)
  }

  render() {
    return (
      <div className="edit-form edit-shift-form">
        <h1 className="edit-h1">Edit Shift</h1>
        <form onSubmit={this.onSubmit.bind(this)} className="edit-inputs edit-shift-inputs">
          {/* <div className="input-group">
            <label htmlFor="end">Shift End</label>
            <input
              name="end"
              value={this.state.end}
              onChange={e => this.setState({end: e.target.value})}
            />
          </div> */}

          <div className="input-group">
            <label htmlFor="floatStart">Float Start</label>
            <input
              className="form-input"
              type="text"
              name="floatStart"
              value={this.state.floatStart}
              onChange={e => this.setState({floatStart: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="floatEnd">Float End</label>
            <input
              className="form-input"
              type="text"
              name="floatEnd"
              value={this.state.floatEnd}
              onChange={e => this.setState({floatEnd: e.target.value})}
            />
          </div>

          <button type="submit" className="update-shift-btn">Update</button>
        </form>
      </div>
    )
  }
}

EditShift.propTypes = {
  editShift: PropTypes.func.isRequired,
  getShiftById: PropTypes.func.isRequired,
  shift: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  shift: state.shifts,
  auth: state.auth
})

export default connect(mapStateToProps, { editShift, getShiftById })(EditShift)