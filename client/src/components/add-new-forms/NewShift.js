import React, { Component } from 'react'

class NewShift extends Component {
  render() {
    return (
      <div className="">

        <h1 className="new-shift-h1">New Shift</h1>

        <form className="new-shift-form">

          <div className="input-group">
            <label htmlFor="floatStart">Float Start</label>
            <input
              name="floatStart"
              type="number"
            />
          </div>

          <div className="input-group">
            <label htmlFor="floatEnd">Float End</label>
            <input
              name="floatEnd"
              type="number"
            />
          </div>

          <div className="input-group">
            <label htmlFor="staff">Staff</label>
            <input
              name="staff"
              type="select"
            />
          </div>

          <div className="input-group">
            <label htmlFor="shiftEnd">Shift End</label>
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

export default NewShift