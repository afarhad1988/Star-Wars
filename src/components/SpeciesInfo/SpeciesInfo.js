import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Round from "../Round";




const SpeciesInfo = () => {
	const {slug} = useParams()
	const[species, setSpecies] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	useEffect(()=>{
		axios(`https://swapi.dev/api/species/${slug}`)
				.then((res)=> {
					setSpecies(res.data)
					setIsLoading(false)
				})
	},[slug])
	if(isLoading){
		return <Round/>
	}
	return (
			<div className='element-item'>
				<img src={`https://starwars-visualguide.com/assets/img/species/${slug}.jpg`}
					 alt=""
					 className='element-img img'/>
				<div className='element-info'>

					<ul>
						<h4 className='element-title'>{species.name}</h4>
						<li>Classification: {species.classification}</li>
						<li>Designation: {species.designation}</li>
						<li>Language: {species.language}</li>
						<li>Avg Lifespan: {species.average_lifespan}</li>
						<li>Avg Height: {species.average_height}</li>
						<li>Hair Color(s): {species.hair_colors}</li>
					</ul>
				</div>

			</div>
	);
};
export default SpeciesInfo;
