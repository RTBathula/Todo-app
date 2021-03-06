import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './router';
import "./style.scss";

render(	
	<Provider store={store}>
		<Routes />				
	</Provider>,
	document.getElementById('react-mount')
);
