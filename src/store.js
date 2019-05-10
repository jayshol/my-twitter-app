import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import twitterReducer from './reducers/twitterReducer';
import authReducer from './reducers/auth';

const store = createStore(
	combineReducers({
		twitter: twitterReducer,
		auth:authReducer		
	}),
	applyMiddleware(thunk)
);

export default store;