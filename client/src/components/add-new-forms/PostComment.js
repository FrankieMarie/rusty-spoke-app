import React, { Component } from 'react'

class PostComment extends Component {
  render() {
    return (
      <div>
        <h3>Post Comment</h3>
        <form>

          <div className="input-group">
            <label htmlFor="author">Author</label>
            <input
              name="author"
              type="text"
            />
          </div>

          <div className="input-group">
            <label htmlFor="resource">Resource</label>
            <input
              name="resource"
              type="text"
            />
          </div>

          <div className="input-group">
            <label htmlFor="body">Body</label>
            <input
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