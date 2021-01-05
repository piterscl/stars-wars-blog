import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getcharacters();
		actions.addFavorites();
		actions.deleteFavorites();
	}, []);
	return (
		<div className="conatainer">
			<div className="col-6">
				<h3>Favs</h3>
				{store.characters.map((elemento, index) => {
					return (
						<div key={index}>
							<p>{elemento.name}</p>
							<button
								className="ml-2 btn btn-primary"
								onClick={() => actions.addFavorites(elemento.name)}>
								asdf
							</button>
						</div>
					);
				})}
			</div>
			<div className="col-6">
				<h3>favs</h3>
				{store.favorites.map((elemento, index) => {
					return (
						<div key={index} className="d-flex">
							<p>{elemento}</p>
							<button className="btn" onClick={() => actions.deleteFavorites(index)}>
								<i className="fa fa-trash" />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
