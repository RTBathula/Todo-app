import * as types from '../constants/todo'

const initialState = {
  isShowCreatebtn : null,
  isFetchingList : false,
  fetchingListError : "",
  taskList : [],
  isCreatingTask : false,
  createTaskError: "",
  isFetchingTask: false,
  getTaskError: "",
  fetchedTask: null,
  isUpdatingTask: false,
  updateTaskError: "",
}

export default function todo(state = initialState, action) {
  switch (action.type) {

    case types.TODO_TOGGLE_CREATE_BTN:      
      return {       
      	...state,
        isShowCreatebtn : action.isShow
      }

    case types.TODO_TOGGLE_ISFETCHING_LIST:      
      return {       
        ...state,
        isFetchingList : action.isFetchingList
      }
      
    case types.TODO_GETLIST_SUCCESS:      
      return {       
        ...state,
        isFetchingList : false,
        taskList : action.list
      } 

    case types.TODO_GETLIST_ERROR:      
      return {       
        ...state,
        isFetchingList : false,
        fetchingListError : action.error
      }  

    case types.TODO_TOGGLE_ISCREATING:      
      return {       
        ...state,
        isCreatingTask : action.isCreatingTask
      }
      
    case types.TODO_CREATE_SUCCESS:      
      return {       
        ...state,
        isCreatingTask : false,
        taskList : [
          ...state.taskList,
          action.newTask
        ]
      }   

    case types.TODO_GETLIST_ERROR:      
      return {       
        ...state,
        isCreatingTask : false,
        createTaskError: action.error
      }

    case types.TODO_TOGGLE_ISFETCHING_TASK:      
      return {       
        ...state,
        isFetchingTask : action.isFetchingTask
      }  

    case types.TODO_GETTASK_SUCCESS:       
      return {       
        ...state,
        isFetchingTask : false,
        fetchedTask: action.task
      }  

    case types.TODO_GETLIST_ERROR:      
      return {       
        ...state,
        isFetchingTask : false,
        getTaskError: action.error
      }  

    case types.TODO_TOGGLE_ISUPDATING_TASK:      
      return {       
        ...state,
        isUpdatingTask : action.isUpdatingTask
      }  

    case types.TODO_UPDATETASK_SUCCESS: 

      let newTaskList = {
        ...state.taskList
      }
      for(let i=0;i<newTaskList.length;++i){
        if(newTaskList[i].id === action.id){
          newTaskList[i].title = action.title
          newTaskList[i].description = action.description
          break
        }
      }

      return {       
        ...state,
        isUpdatingTask : false,
        taskList: newTaskList
      }  

    case types.TODO_UPDATETASK_ERROR:      
      return {       
        ...state,
        isUpdatingTask : false,
        updateTaskError: action.error
      }              

    default:
      return state
  }
}