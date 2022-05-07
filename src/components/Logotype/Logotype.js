import React from 'react';
import './Logotype.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";

const Logotype = () => {
	return (
			<div className='logo'>
				<Link to='/'>
					<img src={logo} alt="logo"/>
				</Link>
			</div>
	);
};
export default Logotype;
