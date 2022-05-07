import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Logotype from "./components/Logotype";
import Characters from "./components/Characters";
import Films from "./components/Films";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Planets from "./components/Planets";
import CharacterInfo from "./components/CharacterInfo";
import FilmInfo from "./components/FilmInfo";
import SpeciesInfo from "./components/SpeciesInfo";
import StarshipInfo from "./components/StarshipInfo";
import VehiclesInfo from "./components/VehiclesInfo";
import PlanetInfo from "./components/PlanetInfo";



const App = () => {
	return (
			<BrowserRouter>
				<div className="container">
					<Logotype />
					<Routes>
						<Route path="/" element={<Header/>}/>
						<Route path="/characters" element={<Characters/>}/>
						<Route path="/characters/:slug" element={<CharacterInfo/>}/>

						<Route path="/films" element={<Films/>}/>
						<Route path="/films/:slug" element={<FilmInfo/>}/>

						<Route path="/species" element={<Species/>}/>
						<Route path="/species/:slug" element={<SpeciesInfo/>}/>

						<Route path="/starships" element={<Starships/>}/>
						<Route path="/starships/:slug" element={<StarshipInfo/>}/>

						<Route path="/vehicles" element={<Vehicles/>}/>
						<Route path="/vehicles/:slug" element={<VehiclesInfo/>}/>

						<Route path="/planets" element={<Planets/>}/>
						<Route path="/planets/:slug" element={<PlanetInfo/>}/>

					</Routes>
				</div>
			</BrowserRouter>
	);
};
export default App;
