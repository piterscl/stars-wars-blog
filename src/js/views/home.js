import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import cardImg from "../../img//286x180.jpg";

function CardPeople() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getcharacters();
		actions.addFavorites();
		actions.deleteFavorites();
	}, []);
	return (
		<>
			{store.characters.map((elemento, index) => {
				return (
					<div key={index} className="col-3">
						<div className="card card-block card-1">
							<img className="card-img-top" src={cardImg} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">
									<p>{elemento.name}</p>
								</h5>
								<p className="card-text info-card">Height: {elemento.height}</p>
								<p className="card-text info-card">Mass: {elemento.mass}</p>
								<p className="card-text info-card">Birth year: {elemento.birth_year}</p>
								<Link to={"/single/" + index}>
									<button className="btn btn-outline-primary">
										<span>Ver más</span>
									</button>
								</Link>
								<button
									href="#"
									className="btn btn-outline-warning like-button"
									onClick={() => actions.addFavorites(elemento.name)}>
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

function CardStarships() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getstarships();
		actions.addFavorites();
		actions.deleteFavorites();
	}, []);
	return (
		<>
			{store.starships.map((elemento, index) => {
				return (
					<div key={index} className="col-3">
						<div className="card card-block card-1">
							<img className="card-img-top" src={cardImg} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">
									<p>{elemento.name}</p>
								</h5>
								<p className="card-text info-card">Modelo: {elemento.model}</p>
								<p className="card-text info-card">Tripulación: {elemento.crew}</p>
								<p className="card-text info-card">Capacidad de carga: {elemento.cargo_capacity}</p>
								<Link to={"/starships/" + index}>
									<button className="btn btn-outline-primary">
										<span>Ver más</span>
									</button>
								</Link>
								<button
									href="#"
									className="btn btn-outline-warning like-button"
									onClick={() => actions.addFavorites(elemento.name)}>
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

function CardPlanets() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getplanets();
		actions.addFavorites();
		actions.deleteFavorites();
	}, []);
	return (
		<>
			{store.planets.map((elemento, index) => {
				return (
					<div key={index} className="col-3">
						<div className="card card-block card-1">
							<img className="card-img-top" src={cardImg} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">
									<p>{elemento.name}</p>
								</h5>
								<p className="card-text info-card">Diametro: {elemento.diameter}</p>
								<p className="card-text info-card">Clima: {elemento.climate}</p>
								<p className="card-text info-card">Población: {elemento.population}</p>
								<Link to={"/planetas/" + index}>
									<button className="btn btn-outline-primary">
										<span>Ver más</span>
									</button>
								</Link>
								<button
									href="#"
									className="btn btn-outline-warning like-button"
									onClick={() => actions.addFavorites(elemento.name)}>
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export const Home = () => (
	<div>
		<h2>Characters</h2>
		<div className="container-fluid">
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">{CardPeople()}</div>
		</div>
		<h2>Planets</h2>
		<div className="container-fluid">
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">{CardPlanets()}</div>
		</div>
		<h2>Starships</h2>
		<div className="container-fluid">
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">{CardStarships()}</div>
		</div>
	</div>
);
//{CardPeople()}
