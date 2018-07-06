import React, { Component } from 'react'
import axios from 'axios'

class RegisterStaff extends Component {
  state = {
      name: '',
      email: '',
      phone: ''
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    axios.post('/api/staff', newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
          />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            type="text"
            placeholder="phone"
            value={this.state.phone}
            onChange={e => this.setState({phone: e.target.value})}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default RegisterStaff