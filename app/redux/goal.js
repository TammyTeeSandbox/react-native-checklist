export function addGoal(goal) {
  return {
    type: 'ADD_GOAL',
    payload: goal
  }
}

export function removeGoal(goal) {
  return {
    type: 'REMOVE_GOAL',
    payload: goal
  }
}

export default function goalReducer(goals = [], action) {
  switch(action.type) {
    case 'ADD_GOAL':
      return [...goals, action.payload]
    case 'REMOVE_GOAL':
      return goals.filter(goal => goal !== action.payload)
    default:
      return goals
  }
}