import { browserHistory } from 'react-router';
import * as types from './constants';
import * as todoApi from './api';

export const toggleCreateBtn = (isShow) => (dispatch) => {
  dispatch({
    type : types.TODO_TOGGLE_CREATE_BTN,
    isShow : isShow
  })
};

export const toggleIsFetchingList = (isFetchingList) => (dispatch) => {  
  dispatch({
    type : types.TODO_TOGGLE_ISFETCHING_LIST,
    isFetchingList : isFetchingList
  })
};

export const getTasksListAsync = () =>  async (dispatch) => { 
	try{
		let list = await todoApi.getTasksList()			 
		dispatch({ 
			type : types.TODO_GETLIST_SUCCESS,
			list : list
		})  		
	}catch(err){
		dispatch({ 
			type : types.TODO_GETLIST_ERROR,
			error : err
		})
	} 
};	

export const toggleIsCreatingTask = (isCreatingTask) => (dispatch) => {
  dispatch({
    type : types.TODO_TOGGLE_ISCREATING,
    isCreatingTask : isCreatingTask
  })
};

export const createNewTaskAsync = (title,description) =>  async (dispatch) => { 
	try{
		let newTask = await todoApi.createNewTask(title,description)
		browserHistory.push('/')				 
		dispatch({ 
			type : types.TODO_CREATE_SUCCESS,
			newTask : newTask
		})		   		
	}catch(err){
		dispatch({ 
			type : types.TODO_CREATE_ERROR,
			error : err
		})
	} 
};

export const toggleIsFetchingTask = (isFetchingTask) => (dispatch) => {
  dispatch({
    type : types.TODO_TOGGLE_ISCREATING,
    isFetchingTask : isFetchingTask
  })
};

export const getTaskByIdAsync = (id) =>  async (dispatch) => { 
	try{
		let task = await todoApi.getTaskById(id)				 
		dispatch({ 
			type : types.TODO_GETTASK_SUCCESS,
			task : task
		})		   		
	}catch(err){
		dispatch({ 
			type : types.TODO_GETTASK_ERROR,
			error : err
		})
	} 
};

export const nullifyFetchedTask = () => (dispatch) => {
  dispatch({
    type : types.TODO_NULLIFY_FETCHEDTASK
  })
};

export const toggleIsUpdatingTask = (isUpdatingTask) => (dispatch) => {
  dispatch({
    type : types.TODO_TOGGLE_ISUPDATING_TASK,
    isUpdatingTask : isUpdatingTask
  })
};

export const updateTaskAsync = (id, title, description) =>  async (dispatch) => { 
	try{
		await todoApi.updateTask(id, title, description)
		browserHistory.push('/') 
		dispatch({ 
			type : types.TODO_UPDATETASK_SUCCESS,
			updatedObj : {id,title,description}
		})
	}catch(err){
		dispatch({ 
			type : types.TODO_UPDATETASK_ERROR,
			error : err
		})
	} 
};

export const toggleIsDeletingTask = (isDeletingTask) => (dispatch) => {
  dispatch({
    type : types.TODO_TOGGLE_ISDELETING_TASK,
    isDeletingTask : isDeletingTask
  })
};

export const deleteTaskAsync = (id) =>  async (dispatch) => { 
	try{
		await todoApi.deleteTask(id)	 
		dispatch({ 
			type : types.TODO_DELETETASK_SUCCESS,
			id: id
		})
	}catch(err){
		dispatch({ 
			type : types.TODO_DELETETASK_ERROR,
			error : err
		})
	} 
};