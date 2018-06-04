import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addExpense } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(addExpense(expense))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { amount, title } = this.state
    const id = uuidv1()
    this.props.addExpense({id, amount, title})
    this.setState({ title: '', amount: ''})
  }

  render() {
    const { amount, title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps) (ConnectedForm)
