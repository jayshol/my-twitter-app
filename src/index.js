import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import TwitterApp from './components/twitterApp';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';


ReactDOM.render(
		<Provider store={store}>
		<Router>
			<TwitterApp />
		</Router>
		</Provider>,
		 document.getElementById('root')
);


