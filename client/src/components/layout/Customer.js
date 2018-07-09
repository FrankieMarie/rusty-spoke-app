import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Customer extends Component {
  render() {
    const { name } = this.props.customer
    console.log('cus', name)
    return (
      <div>
        <h2>{name}</h2>
        <Link to="/new-visit">Create new visit</Link>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default Customer