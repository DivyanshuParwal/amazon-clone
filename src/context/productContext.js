import React, { useState } from 'react';

import { products } from '../Components/Home/Products/product_details';

export const ProductContext = React.createContext({
	cartNum: 0,
	addProduct: () => {},
	removeProduct: () => {},
	checkoutProducts: [],
	totalPrice: 0
});

const ProductContextProvider = (props) => {
	const [ cartNumber, setCartNumber ] = useState(0);
	const [ checkoutProducts, setCheckoutProducts ] = useState([]);
	const [ totalPrice, setTotalPrice ] = useState(0);

	const addProductHandler = (id) => {
		const product = products.filter((product) => product.id === id);
		setCartNumber((prevCartNumber) => prevCartNumber + 1);
		setCheckoutProducts((prevCheckoutProducts) => [ ...prevCheckoutProducts, ...product ]);
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product[0].price);
	};

	const removeProductHandler = (id) => {
		const product = products.filter((product) => product.id === id);
		setCartNumber((prevCartNumber) => prevCartNumber - 1);
		setCheckoutProducts((prevCheckoutProducts) => prevCheckoutProducts.filter((product) => product.id !== id));
		setTotalPrice((prevTotalPrice) => prevTotalPrice - product[0].price);
	};

	return (
		<ProductContext.Provider
			value={{
				cartNum: cartNumber,
				addProduct: addProductHandler,
				removeProduct: removeProductHandler,
				checkoutProducts,
				totalPrice
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
