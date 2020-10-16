import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Auth from './Components/Auth/Auth';
import Logout from './Components/Auth/Logout/Logout';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
	return (
		<div className="App">
			<Route path="/" exact>
				<NavBar />
				<Home />
			</Route>
			<Route path="/checkout" exact>
				<NavBar />
				<Checkout />
			</Route>
			<Route path="/authenticate" exact component={Auth} />
			<Route path="/logout" exact component={Logout} />
		</div>
	);
};

export default App;
