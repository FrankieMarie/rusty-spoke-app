import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
 render() {
    return (
      <nav className="sidebar">

      <div className="nav">
        <div className="link">
          <i className="fas fa-users nav-icon"></i>
          <Link className="nav-link" to="/customers">Customers</Link>
        </div>

        <div className="link">
          <i className="fas fa-user-check nav-icon"></i>
          <Link className="nav-link" to="/current-visits">Current Visits</Link>
        </div>

        <div className="link">
          <i className="fas fa-dollar-sign nav-icon"></i>
          <Link className="nav-link" to="/purchases">Purchases</Link>
        </div>

        <div className="link">
          <i class="fas fa-lock nav-icon"></i>
          <Link className="nav-link" to="/holds">Holds</Link>
        </div>

        <div className="link">
          <i class="fas fa-comments nav-icon"></i>
          <Link className="nav-link" to="/comments">Comments</Link>
        </div>
      </div>

        <p className="legal-text">&copy; 2018 The Rusty Spoke - Shop App</p>
      </nav>
    )
  }
}

export default Navbar