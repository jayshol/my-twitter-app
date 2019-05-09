import React from 'react';
import TopNav from './topNav';
import Home from './home';
import LogOut from './logOut';
import SignUp from './signUp';
import LogIn from './logIn';
import {Route, Switch} from 'react-router-dom';

export default class TwitterApp extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<TopNav user="JayShol" loggedIn={false} />
				<main>
				<Switch>
					<Route exact path="/signUp" component={SignUp} />
					<Route exact path="/logIn" component={LogIn} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/logOut" component={LogOut} />
				</Switch>
				</main>
			</div>
		);
	}
}