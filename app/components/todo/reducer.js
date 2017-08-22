import * as types from './constants'

const initialState = {
  isShowCreateBtn : false,
  
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

  isDeletingTask: false,
  deleteTaskError: ""
}

export default function todo(state = initialState, action) {
  switch (action.type) {

    case types.TODO_TOGGLE_CREATE_BTN:      
      return {       
      	...state,
        isShowCreateBtn : action.isShow
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

    case types.TODO_NULLIFY_FETCHEDTASK:       
      return {       
        ...state,       
        fetchedTask: null
      }    

    case types.TODO_TOGGLE_ISUPDATING_TASK:      
      return {       
        ...state,
        isUpdatingTask : action.isUpdatingTask
      }  

    case types.TODO_UPDATETASK_SUCCESS: 

      var taskIndex = state.taskList.findIndex(task => task.id === action.id);
   
      return {       
        ...state,
        isUpdatingTask : false,
        taskList: [
          ...state.taskList.slice(0,taskIndex),
          { 
            ...state.taskList[taskIndex],
            title : action.title,
            description: action.description
          },
          ...state.taskList.slice(taskIndex + 1)
        ]
      }  

    case types.TODO_UPDATETASK_ERROR:          
      return {       
        ...state,
        isUpdatingTask : false,
        updateTaskError: action.error
      } 

    case types.TODO_TOGGLE_ISDELETING_TASK:      
      return {       
        ...state,
        isDeletingTask : action.isDeletingTask
      }

    case types.TODO_DELETETASK_SUCCESS:       

      var taskIndex = state.taskList.findIndex(task => task.id === action.id);   

      return {       
        ...state,
        isDeletingTask : false,
        taskList: [
          ...state.taskList.slice(0,taskIndex),
          ...state.taskList.slice(taskIndex + 1)
        ]
      }     

    case types.TODO_DELETETASK_ERROR:      
      return {       
        ...state,
        isDeletingTask : false,
        deleteTaskError: action.error
      } 

    default:
      return state
  }
}