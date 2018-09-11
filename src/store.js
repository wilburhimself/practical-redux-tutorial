import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import expensesReducer from './expenses/reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(expensesReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store
