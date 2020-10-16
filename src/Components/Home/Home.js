import React, { useState, useEffect, Fragment } from 'react';

import './Home.css';
import Products from './Products/Products';
import { homeImages } from './homeImages';

const Home = () => {
	const [ imgUrl, setImgUrl ] = useState('');

	useEffect(() => {
		setImgUrl(homeImages[Math.floor(Math.random() * (homeImages.length - 1))]);
	}, []);

	return (
		<Fragment>
			<div className="Home">
				<img className="HomeImg" src={imgUrl} alt="amazon-products" />
				<Products />
			</div>
			<footer className="Footer">
				<p>
					<strong>Developed by Divyanshu Parwal</strong>
				</p>
			</footer>
		</Fragment>
	);
};

export default Home;
