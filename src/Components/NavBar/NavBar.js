import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { AuthContext } from '../../context/authContext';

import './NavBar.css';
import { ProductContext } from '../../context/productContext';

const NavBar = () => {
	const product = useContext(ProductContext);
	const auth = useContext(AuthContext);
	return (
		<nav className="Nav">
			<Link to="/">
				<img className="NavImg" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
			</Link>
			<div className="SearchBox">
				<input type="text" className="InputField" />
				<SearchIcon className="SearchIcon" />
			</div>
			<div className="Links">
				{auth.isAuthenticated ? (
					<Link to="/logout" className="Link">
						<div>Hello</div>
						<div>
							<strong>Sign out</strong>
						</div>
					</Link>
				) : (
					<Link to="/authenticate" className="Link">
						<div>Hello</div>
						<div>
							<strong>Sign In</strong>
						</div>
					</Link>
				)}
				<Link to="/" className="Link">
					<div>Returns</div>
					<div>
						<strong>& Orders</strong>
					</div>
				</Link>
				<Link to="/" className="Link">
					<div>Try</div>
					<div>
						<strong>Prime</strong>
					</div>
				</Link>
				<Link to="/checkout" className="Link" style={{ paddingTop: '7px' }}>
					<div className="CartNum">
						<strong>{product.cartNum}</strong>
					</div>
					<div>
						<LocalGroceryStoreIcon />
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
