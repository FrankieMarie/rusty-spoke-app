import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCustomers } from '../redux/actions/customerActions'
import Hold from './layout/Hold'

class Holds extends Component {

  render() {

    return (
      <div>
        <h1 className="holds-h1">Holds</h1>

      </div>
    )
  }
}



export default Holds