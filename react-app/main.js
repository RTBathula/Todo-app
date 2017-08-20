import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import store from './store'

//Main css
import "./index.scss";

//Custom
import Todolist from './containers/todo-list';
import Todocreate from './containers/todo-create';


const history = syncHistoryWithStore(browserHistory, store)

render(	
	<Provider store={store}>
		<Router history = {history}>					
			<Route path="/" component={Todolist}/>	
			<Route path="/create" component={Todocreate}/>			
		</Router>				
	</Provider>,
document.getElementById('react-mount')
);
