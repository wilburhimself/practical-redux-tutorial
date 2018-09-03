import { createStore } from 'redux'
import expensesReducer from './expenses/reducers'

const store = createStore(expensesReducer)
export default store
