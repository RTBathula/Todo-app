import { browserHistory } from 'react-router'
import * as types from '../constants/todo'
import * as transcriptApi from '../api/transcript'
import * as util from '../helpers/util'

export const toggleCreateBtn = (isShow) => (dispatch) => {
  dispatch({
    type : types.TODO_TOGGLE_CREATE_BTN,
    isShow : isShow
  })
}

