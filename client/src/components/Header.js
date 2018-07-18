import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import PropTypes from 'prop-types'

class Header extends Component {
  state = {
    query: ''
  }

  onLogoutClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  handleSearch(e) {
    e.preventDefault()

  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>
            <Link
              className="brand"
              to="/dashboard">
              The Rusty Spoke
            </Link>
          </h1>
          <form className="search" onSubmit={this.handleSearch.bind(this)}>
            <input
              type="serch"
              className="search-input"
              placeholder="Search"/>
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <Link
            to="/"
            onClick={this.onLogoutClick.bind(this)}
            className="logout-btn">
            Logout
          </Link>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)