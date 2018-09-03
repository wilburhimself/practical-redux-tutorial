import { ADD_EXPENSE, REMOVE_EXPENSE } from './constants'

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
})

export const removeExpense = expense => ({
  type: REMOVE_EXPENSE,
  expense
})
