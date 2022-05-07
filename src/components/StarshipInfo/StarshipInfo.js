import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Round from "../Round";

const StarshipInfo = () => {
	const {slug} = useParams()
	const [starships, setStarships] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(()=>{
		axios(`https://swapi.dev/api/starships/${slug}`)
				.then((res)=> {
					setStarships(res.data)
					setIsLoading(false)
				})
	},[slug])

	if(isLoading){
		return <Round/>
	}
	return (
			<div className='element-item'>
				<img src={`https://starwars-visualguide.com/assets/img/starships/${slug}.jpg`}
					 alt="photo"
					 className='element-img img'/>
				<div className='element-info'>
					<ul>
						<h4 className='element-title'>{starships.name}</h4>
						<li>Model: {starships.model}</li>
						<li>Manufacturer: {starships.manufacturer}</li>
						<li>Class: {starships.starship_class}</li>
						<li>Cost: {starships.cost_in_credits} credits</li>
						<li>Speed: {starships.max_atmosphering_speed}km\h</li>
						<li>Hyperdrive Rating: {starships.hyperdrive_rating}</li>
						<li>MGLT: {starships.MGLT}</li>
					</ul>
				</div>
			</div>
	);
};
export default StarshipInfo
