import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './Round.css'

const Round = () => {
	return (
			<div className='round'>
				<Spinner animation="border" role="status"  variant="warning">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
	);
};
export default Round;
