import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllVisits } from '../redux/actions/currentVisitsActions'
import CurrentVisit from './layout/CurrentVisit'

class CurrentVisits extends Component {
  componentDidMount() {
    this.props.getAllVisits()
  }
  render() {
    const { visits } = this.props.visits
    let allVisits;
    if (!visits) {
      allVisits = <div></div>
    } else {
      allVisits = visits.map(visit => <CurrentVisit key={visit._id} visit={visit} />)
    }
    return (
      <div>
        <h1 className="visits-h1">Current Visits</h1>
        <div className="all-visits">
          {allVisits}
        </div>
        <footer className="customers-footer">
          <Link
            to="/new-visit"
            className="new-customer-link"
          >
            <i className="fas fa-plus"></i> New Visit
          </Link>
        </footer>
      </div>
    )
  }
}

CurrentVisits.propTypes = {
  getAllVisits: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  visits: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  visits: state.visits,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllVisits })(CurrentVisits)