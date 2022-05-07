import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'
import characters from '../../assets/images/character.jpg'
import films from '../../assets/images/films.jpg'
import planets from '../../assets/images/planets.jpg'
import species from '../../assets/images/species.jpg'
import starships from '../../assets/images/starships.jpg'
import vehicles from '../../assets/images/species.jpg'


const Header = () => {
	return (
			<div className='row'>
				<div className=" col-sm-6 col-md-6 col-lg-4">
					<Link to='/characters'>
						<div className="category-item">
							<img src={characters} alt="characters"/>
							<div className="name-category">
								<h2 className="title characters">
									characters
								</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className=" col-sm-6 col-md-6 col-lg-4">
					<Link to='/films'>
						<div className="category-item">
							<img src={films} alt="films"/>
							<div className="name-category">
								<h2 className="title films">
									films
								</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className=" col-sm-6 col-md-6 col-lg-4">
					<Link to='/species'>
						<div className="category-item">
							<img src={species} alt="species"/>
							<div className="name-category">
								<h2 className="title species">
									species
								</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className=" col-sm-6 col-md-6 col-lg-4">
					<Link to='/starships'>
						<div className="category-item">
							<img src={starships} alt="starships"/>
							<div className="name-category">
								<h2 className="title starships">
									starships
								</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className=" col-sm-6 col-md-6 col-lg-4">
					<Link to='/vehicles'>
						<div className="category-item">
							<img src={vehicles} alt="vehicles"/>
							<div className="name-category">
								<h2 className="title vehicles">
									vehicles
								</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className=" col-sm-6 col-md-6 col-lg-4">
					<Link to='/planets'>
						<div className="category-item">
							<img src={planets} alt="planets"/>
							<div className="name-category">
								<h2 className="title planets">
									planets
								</h2>
							</div>
						</div>
					</Link>
				</div>
			</div>
	);
};
export default Header;
