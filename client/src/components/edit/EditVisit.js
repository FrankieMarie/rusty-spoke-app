import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editVisit, getVisitById } from '../../redux/actions/currentVisitsActions'
import isEmpty from '../../validation/is-empty'

class EditVisit extends Component {
  state = {
    reason: '',
    toolbox: '',
    worktrade: '',
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
      visit.reason = !isEmpty(visit.reason) ? visit.reason : ''
      visit.toolbox = !isEmpty(visit.toolbox) ? visit.toolbox : ''
      visit.worktrade = !isEmpty(visit.worktrade) ? visit.worktrade : ''
      visit.departed = !isEmpty(visit.departed) ? visit.departed : Date.now()
      // set state
      this.setState({
        reason: visit.reason,
        toolbox: visit.toolbox,
        worktrade: visit.worktrade,
        departed: visit.departed
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const visitData = {
      reason: this.state.reason,
      toolbox: this.state.toolbox,
      worktrade: this.state.worktrade,
      departed: this.state.departed
    }
    this.props.editVisit(this.props.match.params.id, visitData, this.props.history)
  }

  render() {
    return (
      <div className="edit-form">
        <h1 className="edit-h1">Edit Visit</h1>
        <form onSubmit={this.onSubmit.bind(this)} className="edit-inputs">

          <div className="input-group">
            <label
              htmlFor="reason"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Reason
            </label>
            <input
              className="form-input"
              type="text"
              name="reason"
              value={this.state.reason}
              onChange={e => this.setState({reason: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="toolbox"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Toolbox
            </label>
            <input
              className="form-input"
              type="text"
              name="toolbox"
              value={this.state.toolbox}
              onChange={e => this.setState({toolbox: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="worktrade"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Worktrade
            </label>
            <input
              className="form-input"
              type="text"
              name="worktrade"
              value={this.state.worktrade}
              onChange={e => this.setState({worktrade: e.target.value})}
            />
          </div>

          <button type="submit" className="login-btn edit-hold-btn">Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  visit: state.visits,
  auth: state.auth
})

export default connect(mapStateToProps, { editVisit, getVisitById })(EditVisit)