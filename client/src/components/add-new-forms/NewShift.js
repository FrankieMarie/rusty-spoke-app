import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllStaff } from '../../redux/actions/staffActions'
import { newShift } from '../../redux/actions/shiftActions'

class NewShift extends Component {
  render() {
    return (
      <div className="">

        <h1 className="new-shift-h1">New Shift</h1>

        <form className="new-shift-form">

          <div className="input-group">
            <label
              htmlFor="floatStart"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Float Start
            </label>
            <input
              name="floatStart"
              type="number"
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="floatEnd"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Float End
            </label>
            <input
              name="floatEnd"
              type="number"
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="staffOne"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Staff
            </label>
            <input
              name="staffOne"
              type="select"
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="shiftEnd"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Shift End
            </label>
            <input
              name="shiftEnd"
            />
          </div>

          <button className="login-btn new-shift-submit">Submit</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  staff: state.staff,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllStaff, newShift })(NewShift)