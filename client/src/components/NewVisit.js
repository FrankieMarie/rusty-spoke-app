import React, { Component } from 'react'

class NewVisit extends Component {
  render() {
    return (
      <div className="">

        <h1 className="new-visit-h1">New Visit</h1>

        <form className="new-visit-form">

          <div className="input-group">
            <label htmlFor="customer">Customer</label>
            <select
              name="customer"
            />
          </div>

          <div className="input-group">
            <label htmlFor="toolbox">Toolbox</label>
            <select
              name="toolbox"
            />
          </div>

          <div className="input-group">
            <label htmlFor="worktrade">Worktrade?</label>
            <select
              name="worktrade"
            />
          </div>

          <div className="input-group">
            <label htmlFor="reason">Reason for visit</label>
            <input
              name="reason"
              type="text"
            />
          </div>

          <div className="input-group">
            <label htmlFor="departed">Departed</label>
            <input
              name="departed"
              type="date"
            />
          </div>

          <button className="login-btn new-visit-submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default NewVisit