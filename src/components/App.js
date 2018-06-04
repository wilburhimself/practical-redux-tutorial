import React from 'react'
import List from './List'
import Form from './Form'

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Expenses</h2>
      <List />
    </div>

    <div className="col-md-4 offset-md-1">
      <h2>Add an expense</h2>
      <Form />
    </div>
  </div>
)

export default App
