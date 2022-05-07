import React, {useEffect, useState} from 'react';
import axios from "axios";
import Round from "../Round";
import {Link} from "react-router-dom";

const Planets = () => {
	const [planets, setPlanets] = useState({})
	const [page, setPage] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios(`https://swapi.dev/api/planets/?page=${page + 1}`)
				.then((res) => {
					setPlanets(res.data)
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
						Array(Math.ceil(planets.count / 10)).fill(0).map((item, idx) => idx + 1).map((buttonNum, idx) => (
								<button key={idx} className='pagination-btn'
										onClick={() => setPage(idx)}>{idx + 1}</button>
						))
					}
				</div>
				<div className='row'>

					{
						planets?.results.map((planet, index) => (
								<Link key={index} to = {`/planets/${index+1}`} className='item-col'>
									<div className="element-item">
										<img src={`https://starwars-visualguide.com/assets/img/planets/${10 * page + index + 1}.jpg`}
											 alt="photo"
											 className='element-img'/>
										<h5 className='element-title'>{planet.name}</h5>
									</div>
								</Link>
						))
					}
				</div>
			</div>
	);
};
export default Planets;
