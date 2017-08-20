import * as types from '../constants/todo'

const initialState = {
  isShowCreatebtn : null
}

export default function todo(state = initialState, action) {
  switch (action.type) {

    case types.TODO_TOGGLE_CREATE_BTN:      
      return {       
      	...state,
        isShowCreatebtn : action.isShow
      }  

    default:
      return state
  }
}