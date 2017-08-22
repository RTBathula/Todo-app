import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import Todolist from './components/todo/list/container';
import Todocreate from './components/todo/create/container';
import Todoedit from './components/todo/edit/container';

const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
    <Router history = {history}>					
		<Route path="/" component={Todolist}/>	
		<Route path="/create" component={Todocreate}/>
		<Route path="/edit/:taskId" component={Todoedit}/>			
	</Router>
);

export default Routes;