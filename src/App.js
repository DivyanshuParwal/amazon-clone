import React, { Fragment, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import Auth from './Components/Auth/Auth';
import Logout from './Components/Auth/Logout/Logout';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import { AuthContext } from './context/authContext';

const App = () => {
	const auth = useContext(AuthContext);

	let links = (
		<Fragment>
			<Route path="/" exact>
				<NavBar />
				<Home />
			</Route>
			<Route path="/checkout" exact>
				<NavBar />
				<Checkout />
			</Route>
			<Route path="/authenticate" exact component={Auth} />
			<Redirect to="/" />
		</Fragment>
	);

	if (auth.isAuthenticated) {
		links = (
			<Fragment>
				<Route path="/" exact>
					<NavBar />
					<Home />
				</Route>
				<Route path="/checkout" exact>
					<NavBar />
					<Checkout />
				</Route>
				<Route path="/logout" exact component={Logout} />
				<Redirect to="/" />
			</Fragment>
		);
	}

	return <div className="App">{links}</div>;
};

export default App;
