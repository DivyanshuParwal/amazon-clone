import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import './Auth.css';
import { AuthContext } from '../../context/authContext';

const Auth = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const auth = useContext(AuthContext);

	const signUpHandler = (event) => {
		event.preventDefault();
		const userData = {
			email,
			password,
			returnSecureToken: true
		};
		Axios.post(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
			userData
		)
			.then((response) => {
				auth.setAuthenticated(true);
				props.history.goBack();
				setTimeout(() => auth.setAuthenticated(false), response.data.expiresIn * 1000);
			})
			.catch((err) => alert(err.response.data.error.message));
	};

	const loginHandler = (event) => {
		event.preventDefault();
		const userData = {
			email,
			password,
			returnSecureToken: true
		};
		Axios.post(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env
				.REACT_APP_GOOGLE_API_KEY}`,
			userData
		)
			.then((response) => {
				auth.setAuthenticated(true);
				props.history.goBack();
				setTimeout(() => auth.setAuthenticated(false), response.data.expiresIn * 1000);
			})
			.catch((err) => {
				alert(err.response.data.error.message);
			});
	};

	return (
		<div className="AuthContainer">
			<div className="AmazonLogo">
				<img
					src="https://pluspng.com/img-png/amazon-logo-vector-png-amazon-logo-vector-512.png"
					alt="amazon-logo"
					className="AuthImg"
				/>
			</div>
			<form action="#" className="Form">
				<h1>Login/Register</h1>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					id="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					id="password"
				/>
				<Button onClick={loginHandler} className="ProductButton">
					Login
				</Button>
				<p>
					By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice</span>.
				</p>
			</form>
			<div className="AuthDivider">
				<h5>New to Amazon?</h5>
			</div>
			<div className="AuthSignUpButton">
				<Button onClick={signUpHandler} className="ProductButton">
					Create your Amazon Account
				</Button>
			</div>
		</div>
	);
};

export default Auth;
