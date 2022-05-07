import React, {useEffect, useState} from 'react';
import axios from "axios";
import Round from "../Round";
import {useParams} from "react-router-dom";

const PlanetInfo = () => {
	const {slug} = useParams()
	const [planets, setPlanets] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		axios(`https://swapi.dev/api/planets/${slug}`)
				.then((res) => {
					setPlanets(res.data)
					setIsLoading(false)
				})
	}, [slug])
	if (isLoading) {
		return <Round/>
	}
	return (
			<div className='element-item'>
				<img src={`https://starwars-visualguide.com/assets/img/planets/${slug}.jpg`}
					 alt=""
					 className='element-img img'/>
				<div className='element-info'>

					<ul>
						<h4 className='element-title'>{planets.name}</h4>
						<li>Population: {planets.population}</li>
						<li>Rotation Period: {planets.rotation_period}</li>
						<li>Orbital Period: {planets.orbital_period}</li>
						<li>Diameter: {planets.diameter}</li>
						<li>Gravity: {planets.gravity}</li>
						<li>Terrain: {planets.terrain}%</li>
						<li>Surface Water: {planets.surface_water}</li>
					</ul>
				</div>

			</div>
	);
};
export default PlanetInfo;
