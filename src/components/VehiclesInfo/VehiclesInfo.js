import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Round from "../Round";

const VehiclesInfo = () => {
	const {slug} = useParams()
	const [vehicles, setVehicles] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios(`https://swapi.dev/api/vehicles/${slug}`)
				.then((res) => {
					setVehicles(res.data)
					setIsLoading(false)
				})
	}, [slug])
	if (isLoading) {
		return <Round/>
	}
	return (
			<div className='element-item'>
				<img src={`https://starwars-visualguide.com/assets/img/vehicles/${slug}.jpg`}
					 alt=""
					 className='element-img img'/>
				<div className='element-info'>
					<ul>
						<h4 className='element-title'>{vehicles.name}</h4>
						<li>Model: {vehicles.model}</li>
						<li>Manufacturer: {vehicles.manufacturer}</li>
						<li>Class: {vehicles.starship_class}</li>
						<li>Cost: {vehicles.cost_in_credits} credits</li>
						<li>Speed: {vehicles.max_atmosphering_speed}km\h</li>
						<li>Length: {vehicles.length}</li>
						<li>Cargo Capacity: {vehicles.cargo_capacity}</li>
						<li>Mimimum Crew: {vehicles.crew}</li>
						<li>Passengers: {vehicles.passengers}</li>
					</ul>
				</div>
			</div>
	);
};
export default VehiclesInfo;
