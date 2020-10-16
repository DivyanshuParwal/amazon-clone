import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';

import { ProductContext } from '../../../../context/productContext';
import './Product.css';

const Product = ({ title, rating, image, price, id }) => {
	const context = useContext(ProductContext);
	return (
		<div className="CheckoutProduct">
			<div className="CheckoutProductInfo1">
				<img src={image} alt={title} className="CheckoutProductImg" />
			</div>

			<div className="CheckoutProductInfo2">
				<div>
					<p>{title}</p>
					<p className="Price">
						<strong>
							<span role="img" aria-label="currencyINR">
								₹
							</span>
							{price}
						</strong>
					</p>
					<div className="Rating">
						{Array(rating).fill().map((_) => (
							<p key={Math.random()}>
								<span role="img" aria-label="star">
									⭐
								</span>
							</p>
						))}
					</div>
				</div>
				<div>
					<Button variant="contained" className="ProductButton" onClick={() => context.removeProduct(id)}>
						Remove Item
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Product;
