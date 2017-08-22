import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reduceCombiner';

export default createStore(reducer,applyMiddleware(thunk));