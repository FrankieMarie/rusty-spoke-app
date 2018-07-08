import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Navbar />
          <div className="content">
            all content here
          </div>
        </main>
      </div>
    )
  }
}

export default Dashboard