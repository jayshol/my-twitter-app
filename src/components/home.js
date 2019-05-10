import React from 'react';
import './home.css';
import {connect} from 'react-redux';
import {sendTweet, fetchTweets} from '../actions/twitterActions';
import {Redirect} from 'react-router-dom';

export class Home extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		if(! this.props.loggedIn){
			return <Redirect path="/" />;
		}

	}

	componentDidMount(){
		this.props.dispatch(fetchTweets(this.props.currentUser.userName));
	}

	handleSubmit(e){
		e.preventDefault();
		//console.log(this.props.currentUser);
		const tweetObj = {
			userName: this.props.currentUser.userName,
			tweet_text : this.tweetText.value,
			time_posted : new Date(),
			is_tweet : true,
			is_reply:false,
			original_tweet_id:0
		};

		this.props.dispatch(sendTweet(tweetObj)); 
	}
	render(){

		
		const tweets = this.props.tweets.map(tweet => {
			return <div className="tweetList" key={tweet.tweet_id}><span>{tweet.tweet_text}</span></div>
		});


		return(
			<div className="homeCls">
				<form onSubmit={this.handleSubmit} className="tweetForm">
					<textarea rols={5} cols={20} ref={input => this.tweetText = input}></textarea>
					<button type="submit">Send</button>
				</form>

				<div className="tweetsCls">					
					{tweets}					
				</div>
			</div>
			
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	tweets: state.twitter.tweets,
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);