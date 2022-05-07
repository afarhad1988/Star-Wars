import React, {useState, useEffect} from 'react';
import axios from "axios";
import Round from "../Round";
import {Link} from "react-router-dom";

const Vehicles = () => {
	const [vehicles, setVehicles] = useState({})
	const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios(`https://swapi.dev/api/vehicles/?page=${page + 1}`)
				.then((res) => {
					setVehicles(res.data)
					setIsLoading(false)
				})
	}, [page])

	if (isLoading) {
		return <Round/>
	}
	return (
			<div>
				<div className='pagination'>
					{
						Array(Math.ceil(vehicles.count / 10)).fill(0).map((item, idx) => idx + 1).map((buttonNum, idx) => (
								<button key={idx} className='pagination-btn' onClick={()=>setPage(idx)}>{idx + 1}</button>
						))
					}
				</div>
				<div className='row'>

					{
						vehicles?.results.map((vehicle, index) => (
								<Link key={index} to = {`/vehicles/${index+1}`} className='item-col'>
									<div className="element-item">
										<img src={`https://starwars-visualguide.com/assets/img/vehicles/${10 * page + index + 1}.jpg`}
											 alt="photo"
											 className='element-img'/>
										<h5 className='element-title'>{vehicle.name}</h5>

									</div>
								</Link>
						))
					}
				</div>
			</div>
	);
};
export default Vehicles;

