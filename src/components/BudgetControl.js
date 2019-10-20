import React from 'react'
import { checkBudget } from '../helpers'

const BudgetControl = ({ budget, remainingBudget }) => (
  <>
    <div className="ui blue message">Budget: ${budget}</div>

    <div className={checkBudget(budget, remainingBudget)}>
      Remaining: ${remainingBudget}
    </div>
  </>
)

export default BudgetControl
