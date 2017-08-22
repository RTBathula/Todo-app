import { connect } from 'react-redux';
import { 
	toggleCreateBtn, 
	toggleIsFetchingList, 
	getTasksListAsync,
	deleteTaskAsync
} from '../actions';
import TodoList from './index';

const mapStateToProps = state => ({
  isShowCreateBtn : state.todo.isShowCreateBtn,
  taskList : state.todo.taskList,
  isFetchingList : state.todo.isFetchingList,
  fetchingListError : state.todo.fetchingListError
});

const mapDispatchToProps = ({
  toggleCreateBtn,
  toggleIsFetchingList,
  getTasksListAsync,
  deleteTaskAsync
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


