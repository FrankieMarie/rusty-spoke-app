import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editVisit, getVisitById } from '../../redux/actions/currentVisitsActions'
import isEmpty from '../../validation/is-empty'

class DepartVisit extends Component {
  state = {
    departed: Date.now(),
    errors: {}
  }

  componentDidMount() {
    this.props.getVisitById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }

    if (nextProps.visit.visit) {
      const visit = nextProps.visit.visit
      visit.departed = !isEmpty(visit.departed) ? visit.departed : ''
      // set state
      this.setState({
        departed: Date.now()
      })
    }
  }

  handleClick(e) {
    e.preventDefault()
    const visitData = {
      departed: this.state.departed
    }
    this.props.editVisit(this.props.match.params.id, visitData, this.props.history)
  }

  render() {
    return (
      <button className="customer-departed" onClick={this.handleClick.bind(this)}>
      Departed
      </button>
    )
  }
}

const mapStateToProps = state => ({
  visit: state.visits,
  auth: state.auth
})

export default connect(mapStateToProps, { editVisit, getVisitById })(DepartVisit)