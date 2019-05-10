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
	error:null
}

export default function twitterReducer(state=initialState, action){
	return state;
}