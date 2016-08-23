import { combineReducers } from 'redux'

const initialState = {
  url: ''
} 

const item = (state = initialState, action) => {
  switch (action.type) {
    case 'POST':
      return {
        url: action.text,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  item,
})

export default rootReducer
