import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
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