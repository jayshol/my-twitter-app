import {API_BASE_URL} from './config';


export const SEND_TWEET = 'SEND_TWEET';
export const sendTweet = (tweetText) = ({
	type: SEND_TWEET,
	text: tweetText
});