import React, { Component } from 'react';
import {ProgressBar, Grid, Row, Navbar, Nav, NavItem} from 'react-bootstrap';
import MovieContainer from './MovieContainer';
import MovieDetails from './MovieDetails';

const LOADING = 0;
const LIST = 1;
const CARD = 2;

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mode: LOADING,
			movies: [],
			// sort: SORT_BY_YEAR,
			index: 0
		}
	}

	componentDidMount() {
		this.fetchMovies()
			.then((movies) => {
				this.setState({
					movies: movies,
					mode: LIST
				})
			})
			.catch((err) => {
				console.log(err);
			})	
	}

	onClickMovie() {
		this.setState({
			mode: CARD
		})
	}

	renderModeView() {
		switch(this.state.mode) {
			case LOADING: 
				return (
						<ProgressBar active now={100} />
					)
			case LIST:
				return (
					<MovieContainer movies={this.state.movies} onClickMovie={this.onClickMovie.bind(this)}/>
				);
			case CARD:
				return (
					<MovieDetails />
				);
			default:
				break;
		}
	}

	render() {
		return (
			<Grid>
				<Row>
					<Navbar>
						<Navbar.Header onClick={()=> this.setState({mode: LIST})}>
							<Navbar.Brand>
								<span>Movies App</span>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav>
								<NavItem active={true}>Year</NavItem>
								<NavItem>Title</NavItem>
								<NavItem>Rating</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Row>
				<Row>
					{this.renderModeView()}
				</Row>
			</Grid>
		);
	}

  	fetchMovies() {
		return fetch(
			'http://beta.json-generator.com/api/json/get/V1jWvOGyb',
			{method: 'get', mode: 'cors'}
		).then((response)=> {
			return response.json();
		}).then((res)=> {
			return res;
		});
	}
}
