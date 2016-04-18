import React, { Component } from 'react';
import {Panel, ListGroup, ListGroupItem, Media, Grid, Row, Label, Glyphicon} from 'react-bootstrap';

export default class MovieListCard extends Component {
	static propTypes = {
	    index: React.PropTypes.number.isRequired,
	    movie: React.PropTypes.object.isRequired,
	    onClickMovie: React.PropTypes.func.isRequired
  	}

	render() {
		let {onClickMovie, movie} = this.props;
		return (
			<ListGroupItem onClickMovie={() => onClickMovie()}>
			<Media>
				<Media.Left>
					<img  width={64} height={78} src={movie.poster} alt="Image"/>
				</Media.Left>
				<Media.Body>
					<Grid>
						<Row>
							<Label>{movie.title}</Label>
						</Row>
						<Row>
							<Label>{movie.year}</Label>
						</Row>
						<Row>
							<Label><Glyphicon glyph='star' style={{margin: '0', marginRight: '5px', color: 'gold'}}/>	{movie.rating}</Label>
						</Row>
					</Grid>
				</Media.Body>
			</Media>
			</ListGroupItem>
		)
	}
}