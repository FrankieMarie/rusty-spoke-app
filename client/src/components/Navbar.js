import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/authActions'

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <div className="navbar">
        <h1><Link className="navbar-brand" to="/dashboard">The Rusty Spoke</Link></h1>
        <div className="nav-links">
          <Link className="nav-link" to="/customers">Customers</Link>
          <Link className="nav-link" to="/current-visits">Current Visits</Link>
          <Link className="nav-link" to="/purchases">Purchases</Link>
          <Link className="nav-link" to="/holds">Holds</Link>
          <Link className="nav-link" to="/comments">Comments</Link>
        </div>
        <a href="/" onClick={this.onLogoutClick.bind(this)}>Logout</a>
      </div>
    )
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)