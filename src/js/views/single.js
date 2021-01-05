import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TestImg from "../../img//test-img2.jpg";
import "../../styles/interiores.scss";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-white">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h2 className="display-4">
							<stron>{store.characters[params.theid].name}</stron>
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
								<th scope="col">Height</th>
								<th scope="col">Mass</th>
								<th scope="col">Hair color</th>
								<th scope="col">Skin color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">{store[params.single][params.theid].height}</th>
								<td>{store[params.single][params.theid].mass}</td>
								<td>{store[params.single][params.theid].hair_color}</td>
								<td>{store[params.single][params.theid].skin_color}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
