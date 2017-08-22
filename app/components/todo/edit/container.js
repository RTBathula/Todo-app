import { connect } from 'react-redux';
import { 
	toggleCreateBtn, 
	updateTaskAsync, 
	getTaskByIdAsync,
	toggleIsFetchingTask,
	nullifyFetchedTask,
  toggleIsUpdatingTask
} from '../actions';
import TodoList from './index';

const mapStateToProps = state => ({
  isShowCreateBtn : state.todo.isShowCreateBtn,
  fetchedTask : state.todo.fetchedTask,  
  isFetchingTask : state.todo.isFetchingTask,
  getTaskError: state.todo.getTaskError,
  isUpdatingTask: state.todo.isUpdatingTask,
  updateTaskError: state.todo.updateTaskError
});

const mapDispatchToProps = ({
  toggleIsUpdatingTask,
  toggleCreateBtn,
  toggleIsFetchingTask,
  getTaskByIdAsync,
  nullifyFetchedTask,
  updateTaskAsync
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);