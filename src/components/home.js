import React from 'react';
import './home.css';
import {connect} from 'react-redux';

export class Home extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(){

	}
	render(){
		return(
			<div className="homeCls">
				<form onSubmit={this.handleSubmit} className="tweetForm">
					<textarea rols={5} cols={20} ref={input => this.tweetText = input}></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
			
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Home);