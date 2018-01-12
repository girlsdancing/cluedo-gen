import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Suggestion from './Suggestion';
import About from './About';

class Main extends Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Suggestion} />
				<Route path='/about' component={About} />
				<Route path="*" component={Suggestion} />
			</Switch>
		);
	}
}

export default Main;
