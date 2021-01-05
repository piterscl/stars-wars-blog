import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TestImg from "../../img//test-img2.jpg";
import "../../styles/interiores.scss";

export const Starships = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-white">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h2 className="display-4">
							<stron>{store.starships[params.theid].name}</stron>
						</h2>
						<p className="lead">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className="col-lg-6">
						<img src={TestImg} />
					</div>
				</div>
				<div className="row tabla">
					<table className="table table-dark">
						<thead>
							<tr>
								<th scope="col">Modelo</th>
								<th scope="col">Pasajeros</th>
								<th scope="col">Capacidad de carga</th>
								<th scope="col">Tripulación</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">{store.starships[params.theid].model}</th>
								<td>{store.starships[params.theid].passengers}</td>
								<td>{store.starships[params.theid].cargo_capacity}</td>
								<td>{store.starships[params.theid].crew}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

Starships.propTypes = {
	match: PropTypes.object
};
