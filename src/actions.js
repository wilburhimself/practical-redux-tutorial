import { ADD_EXPENSE, REMOVE_EXPENSE } from './constants/action-types'

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
})

export const removeExpense = expense => ({
  type: REMOVE_EXPENSE,
  expense
})
