import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    removeExpense: expense => dispatch(removeExpense(expense))
  }
}

const mapStateToProps = state => {
  return { expenses: state.expenses }
}

class ConnectedList extends React.Component {

  constructor (props) {
    super(props)

    this.removeExpense = this.removeExpense.bind(this)
  }

  removeExpense (expense) {
    this.props.removeExpense(expense)
  }

  render () {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.props.expenses.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title} - {el.amount}
              <button onClick={() => this.removeExpense(el)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ConnectedList)
