import React from 'react';

import Product from './Product/Product';
import { products } from './product_details';
import './Products.css';

const Products = () => {
	const Products = products.map((product) => {
		return (
			<Product
				title={product.title}
				key={product.id}
				image={product.image}
				price={product.price}
				rating={product.rating}
				id={product.id}
			/>
		);
	});

	return <div className="Products">{Products}</div>;
};

export default Products;
