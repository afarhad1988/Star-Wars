import React, {useState, useEffect} from 'react';
import axios from "axios";
import Round from "../Round";
import {Link} from "react-router-dom";

const Starships = () => {
	const [starships, setStarships] = useState({})
	const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios(`https://swapi.dev/api/starships/?page=${page + 1}`)
				.then((res) =>{
					setStarships(res.data)
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
						Array(Math.ceil(starships.count / 10)).fill(0).map((item, idx) => idx + 1).map((buttonNum, idx) => (
								<button key={idx} className='pagination-btn' onClick={()=>setPage(idx)}>{idx + 1}</button>
						))
					}
				</div>
				<div className='row'>

					{
						starships?.results.map((starship, index) => (
								<Link key={index} to = {`/starships/${index+1}`} className='item-col'>

									<div className="element-item">
										<img src={`https://starwars-visualguide.com/assets/img/starships/${10 * page + index + 1}.jpg`}
											 alt="photo"
											 className='element-img'/>
										<h5 className='element-title'>{starship.name}</h5>

									</div>
								</Link>
						))
					}
				</div>
			</div>
	);
};
export default Starships;

