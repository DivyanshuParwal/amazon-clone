import React, { useEffect, useContext } from 'react';

import { AuthContext } from '../../../context/authContext';

const Logout = (props) => {
	const auth = useContext(AuthContext);
	useEffect(
		() => {
			auth.setAuthenticated(false);
			props.history.push('/');
		},
		[ props.history, auth ]
	);

	return <div />;
};

export default Logout;
