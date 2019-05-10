import React from 'react';
import TopNav from './topNav';
import Home from './home';
import LogOut from './logOut';
import LogIn from './logIn';
import SideNav from './sideNav';
import Landing from './landing';
import {Route, Switch,Redirect} from 'react-router-dom';

export default class TwitterApp extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<TopNav />				
				<main className="mainCls">
				<SideNav />
				<Switch>
				<Redirect exact from="/" to="/landing" />
					<Route exact path="/landing" component={Landing} />
					<Route exact path="/logIn" component={LogIn} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/logOut" component={LogOut} />
				</Switch>
				</main>
			</div>
		);
	}
}