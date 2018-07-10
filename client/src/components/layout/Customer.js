import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Customer extends Component {
  render() {
    const { name, _id } = this.props.customer
    return (
      <div>
        <h2><Link to={`/customers/${_id}`}> {name} </Link></h2>
        <Link to="/new-visit">Create new visit</Link>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default Customer