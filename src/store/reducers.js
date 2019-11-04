/* eslint-disable no-unused-vars */
const defaultState = {
  inputValue: 'write someting',
  list:[
    'hhhhhhhhhhhhhhhhhhhhhhh',
    'xxxxxxxxxxxxxxxxxxxxxx',
    'llllllllllllllllllll'
  ]
}
export default (state = defaultState, action) => {
  console.log(console.log(state,action))
  // reducer 里智能接受state 不能改变 state
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.inputValue
    return newState
  }
  return state
}