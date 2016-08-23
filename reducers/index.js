import { combineReducers } from 'redux'

const todo = (state, action) => {
  switch (action.type) {
    case 'POST':
      return {
        id: action.id,
        url: action.text,
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'POST':
      return [
        ...state,
        todo(undefined, action)
      ]
      
    default:
      return state
  }
}

const itemApp = combineReducers({
  todos
})
export default itemApp
