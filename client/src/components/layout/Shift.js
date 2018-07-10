import React, { Component } from 'react'
import moment from 'moment'

class Shift extends Component {
  render() {
    const { start, end, floatStart, floatEnd, staff } = this.props.shift
    return (
      <div>
        <p>Shift Start: {moment(start).format('MMMM D, YYYY, H:mm a')}</p>
        <p>Shift End: {moment(end).format('MMMM D, YYYY, H:mm a')}</p>
        <p>Float Start: {floatStart}</p>
        <p>Float End: {floatEnd}</p>
        <div className="shift-staff">
          <p>Staff:</p>
          <p>{staff[0].one.name}</p>
          {staff[0].two ? <p>{staff[0].two.name}</p> : null}
          {staff[0].three ? <p>{staff[0].three.name}</p> : null}
          {staff[0].four ? <p>{staff[0].four.name}</p> : null}
        </div>
      </div>
    )
  }
}

export default Shift