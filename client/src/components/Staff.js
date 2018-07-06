import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Staff extends Component {
  render() {
    return (
      <div>
        All staff
        <Link to="/new-staff" >New Staff</Link>
      </div>
    )
  }
}

export default Staff