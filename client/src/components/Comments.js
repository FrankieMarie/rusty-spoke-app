import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllComments } from '../redux/actions/commentActions'
import Comment from './layout/Comment'

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
      allComments = comments.map(comment => <Comment key={comment._id} comment={comment} />)
    }
    return (
      <div>
        {allComments}
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