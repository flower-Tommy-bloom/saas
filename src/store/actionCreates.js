import { CHANGE_INPUT, DEL, GET_LIST, ADD } from './actionTypes'

export const changeInputAction = (inputValue) => ({
  type: CHANGE_INPUT,
  inputValue
})

export const delItem = (index) => ({
  type: DEL,
  index
})

export const addTimes = () => ({
  type: ADD,
})


export const getListData = (list) => ({
  type: GET_LIST,
  list
})

export const apiListData = () => {
  return async (dispatch) => {
    const data = await window.axios('/list').then(res => res.data.data)
    const action = getListData(data)
    dispatch(action)
  }
}
