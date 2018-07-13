import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
 render() {
    return (
      <nav className="sidebar">

      <ul className="nav">

        <li className="link active">
          <i className="fas fa-users nav-icon"></i>
          <NavLink className="nav-link" to="/customers" activeClassName="active">Customers</NavLink>
        </li>

        <li className="link">
          <i className="fas fa-user-check nav-icon"></i>
          <NavLink className="nav-link" to="/current-visits" >Current Visits</NavLink>
        </li>

        <li className="link">
          <i className="fas fa-dollar-sign nav-icon"></i>
          <NavLink className="nav-link" to="/purchases">Purchases</NavLink>
        </li>

        <li className="link">
          <i className="fas fa-lock nav-icon"></i>
          <NavLink className="nav-link" to="/holds">Holds</NavLink>
        </li>

        <li className="link">
          <i className="fas fa-comments nav-icon"></i>
          <NavLink className="nav-link" to="/comments">Comments</NavLink>
        </li>

        <li className="link">
          <i className="fas fa-user-clock nav-icon"></i>
          <NavLink className="nav-link" to="/shifts">Shifts</NavLink>
        </li>

        <li className="link">
          <i className="fas fa-star nav-icon"></i>
          <NavLink className="nav-link" to="/staff">Staff</NavLink>
        </li>

      </ul>

        <p className="legal-text">&copy; 2018 The Rusty Spoke - Shop App</p>
      </nav>
    )
  }
}

export default Navbar