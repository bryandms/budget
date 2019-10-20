import React from 'react'
import Expense from './Expense.js'

const ExpensesList = ({ expenses }) => {
  return (
    <>
      <h2 className="ui header">List</h2>

      <div className="ui relaxed divided list">
        {expenses.map(expense => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </>
  )
}

export default ExpensesList
