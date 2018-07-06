import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1><Link className="navbar-brand" to="/dashboard">The Rusty Spoke</Link></h1>
        <Link className="nav-link" to="/customers">Customers</Link>
        <Link className="nav-link" to="/current-visits">Current Visits</Link>
        <Link className="nav-link" to="/purchases">Purchases</Link>
        <Link className="nav-link" to="/holds">Holds</Link>
        <Link className="nav-link" to="/comments">Comments</Link>
      </div>
    )
  }
}

export default Navbar