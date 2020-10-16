import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Product.css';
import { ProductContext } from '../../../../context/productContext';

const Product = ({ title, rating, image, price, id }) => {
	const context = useContext(ProductContext);
	return (
		<div className="Product">
			<div className="ProductInfo1">
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
			<div className="ProductInfo2">
				<img src={image} alt={title} className="ProductImg" />

				<Button variant="contained" className="ProductButton" onClick={() => context.addProduct(id)}>
					Add to Cart
				</Button>

				<Button variant="contained" className="BuyNowButton" onClick={() => context.addProduct(id)}>
					<Link to="/checkout" className="ButtonLink">
						Buy Now
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Product;
