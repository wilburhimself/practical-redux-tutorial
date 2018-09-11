import * as constants from './constants'

export default expenses

export const initialState = {
  expenses: [],
  balance: 0
}

function expenses(state = initialState, action = {}) {
  switch (action.type) {
    case constants.FETCH_EXPENSES_SUCCESS:
      console.log(action)
      return fetchExpenses(state, action.payload)
    case constants.ADD_EXPENSE:
      return addExpense(state, action.payload)
    case constants.REMOVE_EXPENSE:
      return removeExpense(state, action.payload)
    default:
      return state
  }
}

function fetchExpenses(state, payload) {
  console.log(payload)
  return {
    ...state,
    expenses: [payload]
  }
}

function addExpense(state, expense) {
  return {
    ...state,
    expenses: [...state.expenses, expense],
    balance: state.balance + expense.amount
  }
}

function removeExpense(state, expense) {
  const persistedExpense = state.expenses.find(item => item.id === expense.id)
  return {
    ...state,
    expenses: state.expenses.filter(item => item.id !== expense.id),
    balance: state.balance - persistedExpense.amount
  }
}
