import React, { Component } from 'react'

class Volunteer extends Component {
  render() {
    const {name, email, phone} = this.props.staff
    return (
      <div>
        <h2><i className="fas fa-angle-right staff-arrow">{name}</i></h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default Volunteer