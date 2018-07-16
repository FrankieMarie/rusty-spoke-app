import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllComments } from '../redux/actions/commentActions'
import Comment from './layout/Comment'
import PostComment from './add-new-forms/PostComment'

class Comments extends Component {
  componentDidMount() {
    this.props.getAllComments()
  }
  render() {
    const { comments } = this.props.comments
    let allComments;
    if (!comments) {
      allComments = <div></div>
    } else {
      allComments = comments.map(comment => <Comment key={comment.date} comment={comment} />)
    }
    return (
      <div>
        <h1 className="comments-h1">Comments</h1>
        <div className="all-comments">
        <div className="h2s">
          <h2>Author</h2>
          <h2>Date</h2>
          <h2>Resource</h2>
          <h2>Body</h2>
        </div>
          {allComments}
        </div>
        <footer className="comments-footer customers-footer">
          <PostComment />
        </footer>
      </div>
    )
  }
}

Comments.propTypes = {
  getAllComments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  comments: state.comments,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllComments })(Comments)