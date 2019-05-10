import React from 'react';
import './topNav.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export function TopNav(props){

	const menuItems = props.menuItems.map(menuItem => {
		//console.log(menuItem.loggedIn + " " + props.loggedIn );
		// filter menuitems based on status of login
		if(menuItem.loggedIn === props.loggedIn){
			return (<li key={menuItem.id}>
					<Link className="linkCls" to={`/${menuItem.id}`}>
						{menuItem.name}
					</Link>
				</li>);
		}
		return null;		
	});

	return(
		<header className="container" role="banner">			
			<nav className="navbar">
				<h1>{props.userName}</h1>
				<ul>
					{menuItems}
				</ul>
			</nav>
		</header>

	)
}

const mapStateToProps = (state) => ({
	menuItems : state.twitter['menuItems'],
	loggedIn : state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TopNav);

