import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPurchases } from '../redux/actions/purchaseActions'
import Purchase from './layout/Purchase'

class Purchases extends Component {
  componentDidMount() {
    this.props.getAllPurchases()
  }
  render() {
    const { purchases } = this.props.purchases
    let allPurchases;
    if (!purchases) {
      allPurchases = <div></div>
    } else {
      allPurchases = purchases.map(purchase => <Purchase key={purchase._id} purchase={purchase} />)
    }
    return (
      <div>
        <h1 className="purchases-h1">Purchases</h1>
        {allPurchases}
      </div>
    )
  }
}

Purchases.propTypes = {
  getAllPurchases: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  purchases: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  purchases: state.purchases,
  auth: state.auth
})

export default connect(mapStateToProps, { getAllPurchases })(Purchases)