import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Product from './Product/Product';
import { ProductContext } from '../../../context/productContext';
import './Products.css';

const Products = () => {
	const context = useContext(ProductContext);
	const Products = context.checkoutProducts.map((product) => {
		return (
			<Product
				title={product.title}
				key={uuidv4()}
				image={product.image}
				price={product.price}
				rating={product.rating}
				id={product.id}
			/>
		);
	});

	return <div className="CheckoutProducts">{Products}</div>;
};

export default Products;
