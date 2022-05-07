import React, {useState, useEffect} from 'react';
import axios from "axios";
import Round from '../Round'
import {Link} from "react-router-dom";

const Films = () => {
	const [films, setFilms] = useState({})

	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		axios('https://swapi.dev/api/films/')
				.then((res) => {
					setFilms(res.data)
					setIsLoading(false)
				})
	}, [])

	if (isLoading) {
		return <Round/>
	}
	return (
			<div>
				<div className='row'>
					{
						films?.results.map((film, index) => (
								<Link key={index} to = {`/films/${index+1}`} className='item-col'>

									<div className="element-item">
										<img src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`}
											 alt=""
											 className='element-img'/>
										<h5 className='element-title'>{film.title}</h5>
									</div>
								</Link>
						))
					}
				</div>
			</div>
	);
};
export default Films;










