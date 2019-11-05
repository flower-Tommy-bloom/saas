/* eslint-disable no-unused-vars */
import { DEL, CHANGE_INPUT, GET_LIST } from './actionTypes'
const defaultState = {
  inputValue: 'write someting',
  list:[]
}
export default (state = defaultState, action) => {
  console.log(console.log(state,action))
  // reducer 里只能接受state 不能改变 state only receive state can't change
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.inputValue
    return newState
  }
  if(action.type === DEL){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  if(action.type === GET_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.list
    return newState
  }
  return state
}