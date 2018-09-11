import * as constants from './constants'

export const fetchExpenses = payload => ({ payload, type: constants.FETCH_EXPENSES})
export const fetchExpensesSuccess = payload => ({ payload, type: constants.FETCH_EXPENSES_SUCCESS })
export const addExpense = payload => ({ payload, type: constants.ADD_EXPENSE })
export const removeExpense = payload => ({ payload, type: constants.REMOVE_EXPENSE })
