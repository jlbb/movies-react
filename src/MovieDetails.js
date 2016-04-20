import React, { Component } from 'react';
import { Image, Grid, Row, Col, Panel, Glyphicon } from 'react-bootstrap';

export default class MovieDetails extends Component {
	render() {
		let {movie} = this.props;
		return (
			<Grid>
				<Row style={{'textAlign': 'center'}}>
					<Image src={movie.poster} thumbnail />
				</Row>
				<Row>
					<h1>{movie.title}</h1>
					<Panel header={"Summary:"} bsStyle="warning">{movie.summary}</Panel>
					<Panel header={"Director:"} bsStyle="warning">{movie.director}</Panel>
					<Panel header={"Actors:"} bsStyle="warning">{movie.actors}</Panel>
					<Panel header={"Category:"} bsStyle="warning">{movie.category}</Panel>
					<Panel header={"Rating:"} bsStyle="warning"><Glyphicon glyph='star' style={{margin: '0', marginRight: '5px', color: 'gold'}}/>	{movie.rating}</Panel>
					<Panel header={"Year:"} bsStyle="warning">{movie.year}</Panel>
				</Row>
			</Grid>
		)
	}

}