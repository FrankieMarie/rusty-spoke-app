import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editHold, getHoldById } from '../../redux/actions/holdsActions'
import isEmpty from '../../validation/is-empty'

class EditHold extends Component {
  state = {
    customer: '',
    date: '',
    item: '',
    description: '',
    completed: false,
    errors: {}
  }

  componentDidMount() {
    this.props.getHoldById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }

    if (nextProps.hold.hold) {
      const hold = nextProps.hold.hold
      hold.customer = !isEmpty(hold.customer) ? hold.customer : ''
      hold.date = !isEmpty(hold.date) ? hold.date : ''
      hold.item = !isEmpty(hold.item) ? hold.item : ''
      hold.description = !isEmpty(hold.description) ? hold.description : ''
      hold.completed = !isEmpty(hold.completed) ? hold.completed : ''
      // set state
      this.setState({
        customer: hold.customer,
        date: hold.date,
        item: hold.item,
        description: hold.description,
        completed: hold.completed
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const holdData = {
      customer: this.state.customer,
      date: this.state.date,
      item: this.state.item,
      description: this.state.description,
      completed: this.state.completed
    }
    this.props.editHold(this.props.match.params.id, holdData, this.props.history)
  }

  render() {
    return (
      <div className="edit-form">
        <h1 className="edit-h1">Edit Hold</h1>
        <form onSubmit={this.onSubmit.bind(this)} className="edit-inputs">
          <div className="input-group" style={{display: "none"}}>
            <label htmlFor="customer">Customer</label>
            <input
              className="form-input"
              type="text"
              name="customer"
              value={this.state.customer}
              onChange={e => this.setState({customer: e.target.value})}
            />
          </div>

          <div className="input-group" style={{display: "none"}}>
            <label htmlFor="date">Date</label>
            <input
              className="form-input"
              type="text"
              name="date"
              value={this.state.date}
              onChange={e => this.setState({date: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="item"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Item
            </label>
            <input
              className="form-input"
              type="text"
              name="item"
              value={this.state.item}
              onChange={e => this.setState({item: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="description"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Description
            </label>
            <input
              className="form-input"
              type="text"
              name="description"
              value={this.state.description}
              onChange={e => this.setState({description: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="completed"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Completed? (true or false)
            </label>
            <input
              className="form-input"
              type="text"
              name="completed"
              value={this.state.completed}
              onChange={e => this.setState({completed: e.target.value})}
            />
          </div>

          <button type="submit" className="login-btn edit-hold-btn">Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hold: state.holds,
  auth: state.auth
})

export default connect(mapStateToProps, { editHold, getHoldById })(EditHold)