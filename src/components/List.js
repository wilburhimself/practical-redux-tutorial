import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { expenses: state.expenses }
}

const ConnectedList = ({ expenses }) => (
  <ul className="list-group list-group-flush">
    {expenses.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title} - {el.amount}
      </li>
    ))}
  </ul>
)

export default connect(mapStateToProps) (ConnectedList)
