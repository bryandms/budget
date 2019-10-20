import React from 'react'

const Expense = ({ expense }) => (
  <div className="item">
    <div className="right floated content">
      <span className="ui blue tag label">${expense.amount}</span>
    </div>

    <p className="header">{expense.name}</p>
  </div>
)

export default Expense
