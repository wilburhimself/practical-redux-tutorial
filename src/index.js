import { createStore } from 'redux'
import expensesReducer from './reducers'

const store = createStore(expensesReducer)
export default store
