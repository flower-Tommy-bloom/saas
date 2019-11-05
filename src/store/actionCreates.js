import { CHANGE_INPUT, DEL, GET_LIST } from './actionTypes'

export const changeInputAction = (inputValue) => ({
  type: CHANGE_INPUT,
  inputValue
})

export const delItem = (index) => ({
  type: DEL,
  index
})

export const getListData = (list) => ({
  type: GET_LIST,
  list
})
