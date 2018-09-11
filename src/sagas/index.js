import 'regenerator-runtime/runtime'
import * as expensesSagas from '../expenses/sagas'

export default function * rootSaga () {
  yield [
    expensesSagas.watchFetchExpenses()
  ]
}
