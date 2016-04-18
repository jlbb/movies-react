import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import MovieListCard from './MovieListCard';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class MovieContainer extends Component {
	static propTypes = {
		movies: React.PropTypes.array.isRequired,
		onClickMovie: React.PropTypes.func.isRequired
	}
	
	renderMovieListCardView() {
		let {onClickMovie, movies} = this.props;
		return movies.map((movie, index) => {
				return (
					<MovieListCard key={index} movie={movie} onClickMovie={onClickMovie}/> 
				)
			})
	}

	render() {
		return (
			<Panel defaultExpanded header="List movies">
			    <ListGroup>
					{this.renderMovieListCardView()}
			    </ListGroup>
			</Panel>
		)
	}

}