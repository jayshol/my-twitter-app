import {SEND_TWEET_SUCCESS, AUTH_ERROR, FETCH_TWEETS_SUCCESS} from '../actions/twitterActions';

const initialState = {
	menuItems:[{
		id: 'login',
		name: 'Login',
		loggedIn:false		
	},	
	{
		id:'home',
		name: 'Home',
		loggedIn:true
	},	
	{
		id:'logout',
		name:'Logout',
		loggedIn:true
	}],
	error:null,
	tweets: []
}

export default function twitterReducer(state=initialState, action){

	if(action.type === SEND_TWEET_SUCCESS){
		//console.log(action.tweet);
		const tweets = state.tweets;
		tweets.push(action.tweet);
		return Object.assign({}, state, {
			tweets:tweets
		});
	}

	if(action.type === FETCH_TWEETS_SUCCESS){
		return Object.assign({}, state, {
			tweets: action.tweets
		})
	}

	return state;
}