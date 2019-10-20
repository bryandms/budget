import React, { useState } from 'react'
import Error from './Error'

const BudgetEntry = props => {
  const { setBudget, setShowBudgetEntry, setRemainingBudget } = props

  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)

  const handleChange = e => setAmount(parseInt(e.target.value, 10))

  const handleSubmit = e => {
    e.preventDefault()

    if (amount < 1 || isNaN(amount)) {
      setError(true)
      return
    }

    setBudget(amount)
    setRemainingBudget(amount)
    setError(false)
    setShowBudgetEntry(false)
  }

  return (
    <>
      <h3 className="ui center aligned header">Enter your budget</h3>

      {error && <Error message="Invalid budget." />}

      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="number"
            placeholder="Enter your budget"
            onChange={handleChange}
          />
        </div>

        <input
          className="ui mx-auto primary button"
          type="submit"
          value="Define budget"
        />
      </form>
    </>
  )
}

export default BudgetEntry
