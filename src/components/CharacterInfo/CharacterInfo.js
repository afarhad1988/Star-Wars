import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Round from "../Round";

const CharacterInfo = () => {
	let {slug} = useParams()
	const [characters, setCharacters] = useState({})
	const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
		axios(`https://swapi.dev/api/people/${slug}`)
				.then((res) => {
					setCharacters(res.data)
					setIsLoading(false)
				})

	},[slug])
	if(isLoading){
		return <Round/>
	}
	return (

			<div className='element-item'>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${slug}.jpg`}
					 alt=""
					 className='element-img img'/>
				<div className='element-info'>

					<ul>
						<h4>{characters.name}</h4>
						<li>Birth Year:{characters.birth_year}</li>
						<li>Height:{characters.height}</li>
						<li>Mass: {characters.mass}</li>
						<li>Gender: {characters.gender}</li>
						<li>Hair Color: {characters.hair_color}</li>
						<li>Skin Color: {characters.skin_color}</li>
					</ul>
				</div>

			</div>
	);
};
export default CharacterInfo;
