import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllHolds } from '../redux/actions/holdsActions'
import Hold from './layout/Hold'

class Holds extends Component {
  componentDidMount() {
    this.props.getAllHolds()
  }

  render() {
    const { holds } = this.props.holds
    let allHolds;
    if (!holds) {
      allHolds = <div></div>
    } else {
      allHolds = holds.map(hold => <Hold key={hold._id} hold={hold} />)
    }
    return (
      <div>
        <h1 className="holds-h1">Holds</h1>
        {allHolds}
        <footer className="customers-footer">
          <Link
            to="/new-hold"
            className="new-customer-link"
          >
            <i className="fas fa-user-lock"></i> New Hold
          </Link>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  holds: state.holds,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllHolds })(Holds)