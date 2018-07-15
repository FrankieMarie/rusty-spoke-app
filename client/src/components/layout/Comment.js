import React, { Component } from 'react'
import moment from 'moment'

class Comment extends Component {
  render() {
    const { author, date, resource, body } = this.props.comment
    return (
      <div className="comment-container">
        <p>{author.name}</p>
        <small>{moment(date).format('MMMM D, YYYY, H:mm a')}</small>
        <p>{resource.name}</p>
        <p className="comment-body">{body}</p>
      </div>
    )
  }
}

export default Comment