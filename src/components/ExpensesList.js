import React from 'react'
import Expense from './Expense.js'

const ExpensesList = ({ expenses, darkMode }) => {
  return (
    <>
      <h2 className={darkMode ? 'ui inverted header' : 'ui header'}>List</h2>

      <div
        className={
          darkMode
            ? 'ui inverted relaxed divided list'
            : 'ui relaxed divided list'
        }
      >
        {expenses.map(expense => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </>
  )
}

export default ExpensesList
