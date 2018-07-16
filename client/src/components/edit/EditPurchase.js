import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPurchase, getPurchaseById } from '../../redux/actions/purchaseActions'
import isEmpty from '../../validation/is-empty'

class EditPurchase extends Component {
  state = {
    item: '',
    description: '',
    costHours: '',
    costCash: '',
    errors: {}
  }

  componentDidMount() {
    this.props.getPurchaseById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }

    if (nextProps.purchase.purchase) {
      const purchase = nextProps.purchase.purchase
      purchase.item = !isEmpty(purchase.item) ? purchase.item : ''
      purchase.description = !isEmpty(purchase.description) ? purchase.description : ''
      purchase.costHours = !isEmpty(purchase.costHours) ? purchase.costHours : ''
      purchase.costCash = !isEmpty(purchase.costCash) ? purchase.costCash : ''
      // set state
      this.setState({
        item: purchase.item,
        description: purchase.description,
        costHours: purchase.costHours,
        costCash: purchase.costCash
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const purchaseData = {
      item: this.state.item,
      description: this.state.description,
      costHours: this.state.costHours,
      costCash: this.state.costCash
    }
    this.props.editPurchase(this.props.match.params.id, purchaseData, this.props.history)
  }

  render() {
    return (
      <div className="edit-form">
        <h1 className="edit-h1">Edit Purchase</h1>
        <form onSubmit={this.onSubmit.bind(this)} className="edit-inputs">

          <div className="input-group">
            <label
              htmlFor="item"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Item
            </label>
            <input
              className="form-input"
              type="text"
              name="item"
              value={this.state.item}
              onChange={e => this.setState({item: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="description"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Description
            </label>
            <input
              className="form-input"
              type="text"
              name="description"
              value={this.state.description}
              onChange={e => this.setState({description: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="costHours"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Cost Hours
            </label>
            <input
              className="form-input"
              type="text"
              name="costHours"
              value={this.state.costHours}
              onChange={e => this.setState({costHours: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="costCash"
              style={{color: "#18d369", letterSpacing: ".05rem"}}>
              Cost Cash
            </label>
            <input
              className="form-input"
              type="costCash"
              name="date"
              value={this.state.costCash}
              onChange={e => this.setState({costCash: e.target.value})}
            />
          </div>

          <button type="submit" className="login-btn edit-hold-btn">Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  purchase: state.purchases,
  auth: state.auth
})

export default connect(mapStateToProps, { editPurchase, getPurchaseById })(EditPurchase)