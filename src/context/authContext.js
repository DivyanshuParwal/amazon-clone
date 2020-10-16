import React, { useState } from 'react';

export const AuthContext = React.createContext({
	isAuthenticated: false,
	setAuthenticated: () => {}
});

const AuthContextProvider = (props) => {
	const [ isAuthenticated, setIsAuthenticated ] = useState(false);

	const setAuthenticated = (bool) => {
		setIsAuthenticated(bool);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setAuthenticated
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
