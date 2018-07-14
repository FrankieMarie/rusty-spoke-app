import React, { Component } from 'react'

class PostComment extends Component {
  render() {
    return (
      <div>
        <h3>Post Comment</h3>
        <form className="add-comment-form">

          <div className="input-group comment-input">
            <label htmlFor="author">Author</label>
            <input
              className="new-comment-input"
              name="author"
              type="text"
            />
          </div>

          <div className="input-group comment-input">
            <label htmlFor="resource">Resource</label>
            <input
              className="new-comment-input"
              name="resource"
              type="text"
            />
          </div>

          <div className="input-group comment-input">
            <label htmlFor="body">Body</label>
            <input
              className="new-comment-input"
              name="body"
              type="text"
            />
          </div>

        </form>
      </div>
    )
  }
}

export default PostComment