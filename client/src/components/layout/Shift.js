import React, { Component } from 'react'
import moment from 'moment'

class Shift extends Component {
  render() {
    const { start, end, floatStart, floatEnd, staff, _id } = this.props.shift
    return (
      <ul className="shift">

        <li className="shift-item">
          <p className="shift-info">
            <small className="small">Shift Start: </small>
            <span>{moment(start).format('MMMM D, YYYY, H:mm a')}</span>
          </p>
        </li>

        <li className="shift-item">
          <p className="shift-info">
            <small className="small">Shift End: </small>
            <span>{moment(end).format('MMMM D, YYYY, H:mm a')}</span>
          </p>
        </li>

        <li className="shift-item">
          <p className="shift-info">
            <small className="small">Float Start: </small>
            <span>{floatStart}</span>
          </p>
        </li>

        <li className="shift-item">
          <p className="shift-info">
            <small className="small">Float End: </small>
            <span>{floatEnd}</span>
          </p>
        </li>

        <li className="shift-item shift-staff">
          <p className="shift-info">
            <small className="small">Staff:</small>
            <span>{staff[0].one.name}</span>
            {staff[0].two ? <span>, {staff[0].two.name}</span> : null}
            {staff[0].three ? <span>, {staff[0].three.name}</span> : null}
            {staff[0].four ? <span>, {staff[0].four.name}</span> : null}
          </p>
        </li>

        <div className="shift-btns">
          <a href={`/edit-shift/${_id}`} className="shift-edit"><i className="fas fa-pencil-alt"></i> Edit Shift</a>
        </div>

      </ul>
    )
  }
}

export default Shift