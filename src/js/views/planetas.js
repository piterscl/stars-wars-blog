import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TestImg from "../../img//test-img2.jpg";
import "../../styles/interiores.scss";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-white">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h2 className="display-4">
							<stron>{store.planets[params.theid].name}</stron>
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
								<th scope="col">Gravedad</th>
								<th scope="col">Diametro</th>
								<th scope="col">Clima</th>
								<th scope="col">Población</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">{store.planets[params.theid].gravity}</th>
								<td>{store.planets[params.theid].diameter}</td>
								<td>{store.planets[params.theid].climate}</td>
								<td>{store.planets[params.theid].population}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

Planetas.propTypes = {
	match: PropTypes.object
};
