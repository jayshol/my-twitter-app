import React from 'react';
import {login} from '../actions/auth';
import './loginForm.css';
import {connect} from 'react-redux';

export class LoginForm extends React.Component{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
        return this.props.dispatch(login(this.username.value, this.password.value));
    }

    componentDidMount(){
    	this.username.focus();
    }

	render(){
		 let error;
	        if (this.props.error) {
	            error = (
	                <div className="form-error" aria-live="polite">
	                    {this.props.error}
	                </div>
	            );
	        }
		return (
			<form className="loginForm"
				onSubmit={this.onSubmit}>
                {error}
				<fieldset>
					<legend>Login</legend>
					<label htmlFor="username">Username</label>
	                <input	                    
	                    type="text"
	                    name="username"
	                    id="username"
	                    ref={input => this.username = input}	                    
	                />
	                <label htmlFor="password">Password</label>
	                <input	                    
	                    type="password"
	                    name="password"
	                    id="password"
	                    ref={input => this.password = input}	                    
	                />
	                <button type="submit">
	                    Log In
	                </button>
				</fieldset>				
			</form>
		);
	}
}

const mapStateToProps = state => ({
	error: state.auth.error
});

export default connect(mapStateToProps)(LoginForm);

