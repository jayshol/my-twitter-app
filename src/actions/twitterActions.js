import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const SEND_TWEET_SUCCESS = 'SEND_TWEET_SUCCESS';
export const sendTweetSuccess = (tweet) => ({	
	type: SEND_TWEET_SUCCESS,
	tweet: tweet
});

export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';
export const fetchTweetsSuccess = (tweets) => ({
	type: FETCH_TWEETS_SUCCESS,
	tweets: tweets
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});


export const sendTweet = (tweetObject) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	console.log(tweetObject);

	fetch(`${API_BASE_URL}/tweets/`,{
		method:'POST',
		headers:{
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(tweetObject)
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(res =>{ 		
		dispatch(sendTweetSuccess(tweetObject));
	})
	.catch(err => {
		//console.log(err);
		dispatch(authError(err));
	});
};

export const fetchTweets = (userName) => dispatch => {
	fetch(`${API_BASE_URL}/tweets/${userName}`)
		.then(res => {
			if(!res.ok){
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(tweets => {
			dispatch(fetchTweetsSuccess(tweets))
		});
}