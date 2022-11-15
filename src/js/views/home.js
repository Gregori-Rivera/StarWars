import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardPersonaje } from "../component/cardPersonaje.js";
import { CardVehiculo } from "../component/cardVehiculo.js";
import { CardPlaneta } from "../component/cardPlaneta.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	//Personajes
	useEffect(() => {
	  if (store.characters.length > 0) {
		actions.getCharacteristics();
	  }
	}, [store.characters]);
  
	useEffect(() => {
	  actions.getCharacters();
	}, []);
  
	//Planetas
	useEffect(() => {
	  if (store.planets.length > 0) {
		actions.getPlanetsCharacteristics();
	  }
	}, [store.planets]);
  
	useEffect(() => {
	  actions.getPlanets();
	}, []);
  
	//Vehículos
	useEffect(() => {
	  if (store.vehicles.length > 0) {
		actions.getVehiclesCharacteristics();
	  }
	}, [store.vehicles]);
  
	useEffect(() => {
	  actions.getVehicles();
	}, []);
  
	return (
	  <div className="container">
		
		<div>
		<h2 className="Titulos">Personajes</h2>
		  <div className="carrusel">
			<div className="cards">
			  {store.characteristics.map((character, index) => {
				return <CardPersonaje character={character} key={index} />;
			  })}
			</div>
		  </div>
		</div>
  
		<div>
		  <h2 className="Titulos">Planetas</h2>
		  <div className="carrusel">
			<div className="cards">
			  {store.planetscharacteristics.map((planets, index) => {
				return <CardPlaneta planets={planets} key={index} />;
			  })}
			</div>
		  </div>
		</div>
  
		<div>
		<h2 className="Titulos">Vehiculos</h2>
		  <div className="carrusel">
			<div className="cards">
			  {store.vehiclescharacteristics.map((vehicles, index) => {
				return <CardVehiculo vehicles={vehicles} key={index} />;
			  })}
			</div>
		  </div>
		</div>
	  </div>
	);
  };
