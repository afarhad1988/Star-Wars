import React, {useState, useEffect} from 'react';
import axios from "axios";
import Round from "../Round";
import {Link} from "react-router-dom";

const Species = () => {
	const [species, setSpecies] = useState({})
	const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		axios(`https://swapi.dev/api/species/?page=${page + 1}`)
				.then((res) => {
					setSpecies(res.data)
					setIsLoading(false)
				}
		)
	}, [page])

	if (isLoading) {
		return <Round/>
	}
	return (
			<div>
				<div className='pagination'>
					{
						Array(Math.ceil(species.count / 10)).fill(0).map((item, idx) => idx + 1).map((buttonNum, idx) => (
								<button key={idx} className='pagination-btn' onClick={()=>setPage(idx)}>{idx + 1}</button>
						))
					}
				</div>
				<div className='row'>

					{
						species?.results.map((view, index) => (
								<Link key={index} to = {`/species/${10 * page + index + 1}`} className='item-col'>
									<div className="element-item">
										<img src={`https://starwars-visualguide.com/assets/img/species/${10 * page + index + 1}.jpg`}
											 alt=""
											 className='element-img'/>
										<h5 className='element-title'>{view.name}</h5>

									</div>
								</Link>
						))
					}
				</div>
			</div>
	);
};
export default Species;
