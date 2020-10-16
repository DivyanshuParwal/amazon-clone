import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './CheckoutNoAuth.css';

const CheckoutNoAuth = () => {
	return (
		<Fragment>
			<div className="CheckoutNoAuth">
				<div className="CheckoutTop">
					<img
						src="https://www.amazon.in/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg"
						alt="amazon-ad"
						className="CheckoutImg"
					/>
				</div>
				<div className="CheckoutMiddle">
					<div className="CheckoutMiddleLeft">
						<img
							src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
							alt=""
							className="AmazonBasketImg"
						/>
					</div>
					<div className="CheckoutMiddleRight">
						<h2>View your Amazon Basket</h2>
						<p>
							<small>Shop today’s deals</small>
						</p>
						<Button variant="contained" className="CheckoutButton">
							<Link to="/authenticate" className="ButtonLink">
								Sign in to your account
							</Link>
						</Button>
						<Button variant="contained" className="CheckoutNoAuthSignUpButton">
							<Link to="/authenticate" className="ButtonLink">
								Sign up now
							</Link>
						</Button>
					</div>
				</div>
				<p>
					The price and availability of items at Amazon.in are subject to change. The shopping cart is a
					temporary place to store a list of your items and reflects each item's most recent price. Do you
					have a promotional code? We'll ask you to enter your claim code when it's time to pay.
				</p>
			</div>
		</Fragment>
	);
};

export default CheckoutNoAuth;
