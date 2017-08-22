import { connect } from 'react-redux';
import { 
	toggleCreateBtn, 
	toggleIsCreatingTask, 
	createNewTaskAsync
} from '../actions';
import TodoList from './index';

const mapStateToProps = state => ({
  isShowCreateBtn : state.todo.isShowCreateBtn,
  isCreatingTask : state.todo.isCreatingTask,
  createTaskError : state.todo.createTaskError
});

const mapDispatchToProps = ({
  toggleCreateBtn,
  toggleIsCreatingTask,
  createNewTaskAsync
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);