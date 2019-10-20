export const checkBudget = (budget, remaining) => {
  if (budget / 4 > remaining) return 'ui red message'

  if (budget / 2 > remaining) return 'ui yellow message'

  return 'ui green message'
}
