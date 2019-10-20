import React, { useState, useEffect } from 'react'
import BudgetEntry from './components/BudgetEntry'
import Form from './components/Form'
import ExpensesList from './components/ExpensesList'
import BudgetControl from './components/BudgetControl'

const App = () => {
  const [budget, setBudget] = useState(0)
  const [remainingBudget, setRemainingBudget] = useState(0)
  const [showBudgetEntry, setShowBudgetEntry] = useState(true)
  const [createExpense, setCreateExpense] = useState(false)
  const [expense, setExpense] = useState({})
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    if (createExpense) {
      const expensesList = [...expenses, expense]
      setExpenses(expensesList)

      const remaining = remainingBudget - expense.amount
      setRemainingBudget(remaining)

      setCreateExpense(false)
    }
  }, [createExpense, expense, expenses, remainingBudget])

  return (
    <div className="ui container p-t">
      <h2 className="ui center aligned header">
        Weekly expense
        <div className="sub header">Manage your budget.</div>
      </h2>

      <div className="ui raised segment">
        {showBudgetEntry ? (
          <BudgetEntry
            setBudget={setBudget}
            setShowBudgetEntry={setShowBudgetEntry}
            setRemainingBudget={setRemainingBudget}
          />
        ) : (
          <div className="ui stackable two grid">
            <div className="eight wide column">
              <Form
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}
              />
            </div>

            <div className="eight wide column">
              <ExpensesList expenses={expenses} />

              <BudgetControl
                budget={budget}
                remainingBudget={remainingBudget}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
