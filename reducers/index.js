import { combineReducers } from 'redux'

const html = (state, action) => {
  switch (action.type) {
    case 'POST':
       return {
         url: action.url,
         //html: action.html
       }
    default:
      return state
  }
}
export default html
