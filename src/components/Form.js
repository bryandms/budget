import React, { useState } from 'react'
import Error from './Error'
import shorid from 'shortid'

const Form = props => {
  const { setExpense, setCreateExpense } = props

  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (amount < 0 || isNaN(amount) || name === '') {
      setError(true)
      return
    }

    const expense = {
      id: shorid.generate(),
      name,
      amount
    }

    setExpense(expense)
    setCreateExpense(true)
    setError(false)
    setName('')
    setAmount(0)
  }

  return (
    <>
      <h3 className="ui header">Add your expenses</h3>

      {error && <Error message="All fields are required." />}

      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="E.g. Transport"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="field">
          <label>Amount</label>
          <input
            type="number"
            placeholder="E.g. 300"
            onChange={e => setAmount(parseInt(e.target.value || 0, 10))}
            value={amount}
          />
        </div>

        <input
          className="ui mx-auto primary button"
          type="submit"
          value="Add"
        />
      </form>
    </>
  )
}

export default Form
