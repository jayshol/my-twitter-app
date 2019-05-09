const initialState = {
	menuItems:[{
		id: 'login',
		name: 'Login',
		loggedIn:false		
	},
	{
		id: 'signUp',
		name: 'Sign Up',
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
	}]
}

export default function twitterReducer(state=initialState, action){
	return state;
}