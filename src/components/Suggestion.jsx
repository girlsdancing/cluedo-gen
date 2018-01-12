import React, { Component } from 'react';

import Footer from './Footer';

class Suggestion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			suggestion: {
				suspect: {
					name: '',
					colour: ''
				},
				room: '',
				weapon: ''
			}
		}
	}
	componentWillMount() {
		this.getSuggestion();
	}

	componentDidMount() {
	}

	getSuggestion(){
		const suspects = [
		{
			name: 'Miss Scarlett',
			colour: 'red'
		},
		{
			name: 'Professor Plum',
			colour: 'purple'
		},
		{
			name: 'Mrs. Peacock',
			colour: 'blue'
		}, 
		{
			name: 'Reverend Mr Green',
			colour: 'green'
		},
		{
			name: 'Colonel Mustard',
			colour: 'yellow'
		},
		{
			name: 'Mrs. White',
			colour: 'white'
		}];


		const rooms = [
			'ballroom',
			'kitchen',
			'conservatory',
			'dining room',
			'billiard room',
			'library',
			'hall',
			'lounge',
			'study'
		];


		const weapons = [
			'candlestick',
			'dagger',
			'lead pipe',
			'revolver',
			'rope',
			'spanner'
		];

		const suspect = suspects[parseInt(Math.random() * suspects.length, 10)];
		const room = rooms[parseInt(Math.random() * rooms.length, 10)];
		const weapon = weapons[parseInt(Math.random() * weapons.length, 10)];

		this.setState({ suggestion: { suspect, room, weapon } });
	}	

	render() {
		return (
				<section className={`container clickable ${this.state.suggestion.suspect.colour}`} onClick={() => this.getSuggestion()}>
					<div className="suggestion">
						<h1>CluedoGen - Suggestion</h1>
						I suggest it was <span className="suggestion__item">{ this.state.suggestion.suspect.name }</span>,
						in the <span className="suggestion__item">{ this.state.suggestion.room }</span>, 
						with a <span className="suggestion__item">{ this.state.suggestion.weapon }</span>. <span className="suggestion__button">Disprove?</span>
					</div>
					<Footer />
				</section>
		);
	}
}

export default Suggestion;
