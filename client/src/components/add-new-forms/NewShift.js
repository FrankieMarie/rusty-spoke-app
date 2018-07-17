import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllStaff } from '../../redux/actions/staffActions'
import { newShift } from '../../redux/actions/shiftActions'

class NewShift extends Component {
  state = {
    start: Date.now(),
    floatStart: '',
    floatEnd: '',
    one: '',
    two: '',
    three: '',
    four: '',
    shiftEnd: ''
  }

  componentDidMount() {
    this.props.getAllStaff()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newShift(this.state, this.props.history)
  }

  render() {

    const { staff } = this.props.staff
    let staffNames;
    if (staff) {
      staffNames = staff.map(staff => <option key={staff._id} value={staff._id}>{staff.name}</option>)
    }

    return (
      <div className="">

        <h1 className="new-shift-h1">New Shift</h1>

        <form className="new-shift-form" onSubmit={this.handleSubmit.bind(this)}>

          <div className="input-group">
            <label
              htmlFor="floatStart"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Float Start
            </label>
            <input
              className="form-input"
              name="floatStart"
              type="number"
              value={this.state.floatStart}
              onChange={e => this.setState({floatStart: e.target.value})}
            />
          </div>

          <div className="new-shift-staff-selects">

            <div className="input-group">
              <label
                htmlFor="one"
                style={{color: "#18d369", letterSpacing: ".05rem"}}>
                Staff
              </label>
              <select
                className="new-shift-select"
                name="one"
                value={this.state.one}
                onChange={e => this.setState({one: e.target.value})}
              >
                <option className="option">Select: </option>
                {staffNames}
              </select>
            </div>

            <div className="input-group">
              <label
                htmlFor="two"
                style={{color: "#18d369", letterSpacing: ".05rem"}}>
                Staff
              </label>
              <select
                className="new-shift-select"
                name="two"
                value={this.state.two}
                onChange={e => this.setState({two: e.target.value})}
              >
                <option className="option">Select: </option>
                {staffNames}
              </select>
            </div>

            <div className="input-group">
              <label
                htmlFor="three"
                style={{color: "#18d369", letterSpacing: ".05rem"}}>
                Staff
              </label>
              <select
                className="new-shift-select"
                name="three"
                value={this.state.three}
                onChange={e => this.setState({three: e.target.value})}
              >
                <option className="option">Select: </option>
                {staffNames}
              </select>
            </div>

            <div className="input-group">
              <label
                htmlFor="four"
                style={{color: "#18d369", letterSpacing: ".05rem"}}>
                Staff
              </label>
              <select
                className="new-shift-select"
                name="four"
                value={this.state.four}
                onChange={e => this.setState({four: e.target.value})}
              >
                <option className="option">Select: </option>
                {staffNames}
              </select>
            </div>

          </div>

          <button className="login-btn new-shift-submit">Submit</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  staff: state.staff,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllStaff, newShift })(NewShift)