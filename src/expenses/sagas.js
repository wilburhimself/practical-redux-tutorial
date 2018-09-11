import { call, put, takeEvery } from 'redux-saga/effects'
import * as constants from './constants'
import { fetchExpensesSuccess } from './actions'
import fetcher from '../modules/fetcher'

async function * fetchExpenses (action) {
  try {
    const response = await fetcher('http://localhost:1337/v1/expenses', {}).then((response) => {
      yield put(fetchExpensesSuccess(response))
    })
  } catch(e) {
    console.error(e.message)
    return
  }
}

export function * watchFetchExpenses () {
  yield takeEvery(constants.FETCH_EXPENSES, fetchExpenses);
}
