import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

	render() {
		return (
			<section className="container">
				<div className="about">
					<h1>CluedoGen - About</h1>
					<h2>About</h2>
					<p>CluedoGen - a Cluedo Suggestion Generator was created to assist the People of the Internet to find a suitable Cluedo suggestion/accusation. Does not substitute actual game play. For best results, play the bloody game and figure out who did it yourself.</p>
					<p>It was developed by <a href="http://camilamattos.com">Camila Mattos</a> using <a href="https://reactjs.org">React</a> and &hearts;. It's available on <a href="https://github.com/girlsdancing/cluedo-gen">GitHub</a>.</p>

					<p><strong>Disclaimer:</strong> this website is in no way affiliated with Cluedo/Clue or any of its publishers, including Hasbro, Waddington Games, Parker Brothers and Winning Moves.</p>

					<h2>How to use</h2>
					<p>A suggestion/accusation is generated automatically when the main website loads. To generate a new one, just click anywhere on that page.</p>
					
					<p>more text yada yada yada  yada  yada  yada  yada  yada  yada  yada  yada  yada  yada  yada  yada  yada  yada </p>
					<Link to="/">&laquo; back</Link>
				</div>
			</section>
		);
	}
}

export default About;
