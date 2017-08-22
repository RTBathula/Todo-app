import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todo from './components/todo/reducer';

const rootReducer = combineReducers({
   todo,		
   routing: routerReducer
});

export default rootReducer;
