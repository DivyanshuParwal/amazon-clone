import React, { Fragment, useContext } from 'react';

import { AuthContext } from '../../context/authContext';
import CheckoutAuth from './CheckoutAuth';
import CheckoutNoAuth from './CheckoutNoAuth';

const Checkout = () => {
	const auth = useContext(AuthContext);

	let content = <CheckoutNoAuth />;
	if (auth.isAuthenticated) {
		content = <CheckoutAuth />;
	}

	return <Fragment>{content}</Fragment>;
};

export default Checkout;
