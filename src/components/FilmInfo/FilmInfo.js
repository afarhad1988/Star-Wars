import React, {useEffect, useState} from 'react';
import axios from "axios";
import Round from "../Round";
import {useParams} from "react-router-dom";

const FilmInfo = () => {
	const {slug} = useParams()
	const [films, setFilms] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	useEffect(()=>{
		axios(`https://swapi.dev/api/films/${slug}`)
				.then((res)=> {
					setFilms(res.data)
					setIsLoading(false)
				})
	},[slug])
	if(isLoading){
		return <Round/>
	}
	return (
			<div className='element-item'>
				<img src={`https://starwars-visualguide.com/assets/img/films/${slug}.jpg`}
					 alt="photo"
					 className='element-img img'/>
				<div className='element-info'>

					<ul>
						<h4 className='element-title'>{films.title}</h4>
						<li>Date Created: {films.created}</li>
						<li>Director: {films.director}</li>
						<li>Producer(s): {films.producer}</li>
						<li>Opening Crawl: {films.opening_crawl}</li>
					</ul>
				</div>

			</div>
	);
};
export default FilmInfo;
