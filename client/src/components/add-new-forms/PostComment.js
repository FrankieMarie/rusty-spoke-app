import React, { Component } from 'react'
import { getAllStaff } from '../../redux/actions/staffActions'
import { getAllCustomers } from '../../redux/actions/customerActions'
import { connect } from 'react-redux'
import moment from 'moment'

class PostComment extends Component {
  state = {
    author: '',
    resource: '',
    body: ''
  }
  componentDidMount() {
    this.props.getAllStaff()
    this.props.getAllCustomers()
  }
  render() {
    const { customers } = this.props.customers
    let customerNames;
    if (customers) {
      customerNames = customers.map(customer => <option key={customer._id} value={customer._id}>{customer.name}</option>)
    }
    const { staff } = this.props.staff
    let staffNames;
    if (staff) {
      staffNames = staff.map(staff => <option key={staff._id} value={staff._id}>{staff.name}</option>)
    }
    return (
      <div>
        <h3 className="post-comment-h3">Post Comment</h3>

        <form className="comment-form">

          <div className="add-comment-form">

          <div className="comment-selects">
            <div className="comment-input custom-select">
              <label
                className="new-comment-label"
                htmlFor="author"
                style={{color: "#18d369", letterSpacing: ".05rem"}}>
                Author
              </label>
              <select
                className="styled-select"
                name="author"
                value={this.state.author}
                onChange={e => this.setState({author: e.target.value})}
              >
                {staffNames}
              </select>
            </div>

              <div className="comment-input custom-select">
              <label
                className="new-comment-label"
                htmlFor="resource"
                style={{color: "#18d369", letterSpacing: ".05rem"}}>
                Resource
              </label>
              <select
                className="styled-select"
                name="resource"
                value={this.state.resource}
                onChange={e => this.setState({resource: e.target.value})}
              >
                <option className="option">{moment(Date.now()).format('MMMM D, YYYY, H:mm a')}</option>
                {customerNames}
              </select>
            </div>
          </div>

            <div className="comment-input">
              <label htmlFor="body" className="new-comment-label">
                Body
              </label>
              <textarea
                rows="4" cols="50"
                className="new-comment-textarea"
                name="body"
                type="text"
              >
              </textarea>
            </div>
          </div>

          <button type="submit" className="new-comment-btn">Post</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  staff: state.staff,
  customers: state.customers
})

export default connect(mapStateToProps, { getAllStaff, getAllCustomers})(PostComment)