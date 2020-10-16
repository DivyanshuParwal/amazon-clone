import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductContextProvider from './context/productContext';
import AuthContextProvider from './context/authContext';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ProductContextProvider>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</ProductContextProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
