import React, { Fragment, useContext } from 'react';
import Button from '@material-ui/core/Button';

import Products from './Products/Products';
import { ProductContext } from '../../context/productContext';
import './CheckoutAuth.css';

const CheckoutAuth = () => {
	const product = useContext(ProductContext);

	return (
		<Fragment>
			{product.cartNum === 0 ? (
				<div className="CheckoutNoAuth  ">
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
							<h2>Your Amazon Basket is empty</h2>
							<p>
								<small>Shop today’s deals</small>
							</p>
						</div>
					</div>
					<p>
						The price and availability of items at Amazon.in are subject to change. The shopping cart is a
						temporary place to store a list of your items and reflects each item's most recent price. Do you
						have a promotional code? We'll ask you to enter your claim code when it's time to pay.
					</p>
				</div>
			) : (
				<div className="CheckoutAuth">
					<div className="CheckoutAuthLeft">
						<img
							src="https://www.amazon.in/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg"
							alt="amazon-ad"
							className="CheckoutAuthImgLeft"
						/>
						<h2 className="CheckoutAuthTitle"> Shopping Cart</h2>
						<Products />
					</div>
					<div className="CheckoutAuthRight">
						<div>
							<img
								className="CheckoutAuthImgRight"
								alt=""
								src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
							/>
						</div>
						<div className="CheckoutAuthInfo">
							<p>
								Subtotal ({product.cartNum} items):
								<strong>
									<span role="img" aria-label="currencyINR">
										₹
									</span>
									{product.totalPrice}
								</strong>
							</p>
							<small className="SubtotalGift">
								<input type="checkbox" /> This order contains a gift
							</small>
							<Button variant="contained" className="CheckoutButton">
								Proceed to Buy
							</Button>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default CheckoutAuth;
