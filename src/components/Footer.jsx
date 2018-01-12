import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/Footer.css';

class Footer extends Component {

	render() {
		return (
			<footer className="footer">
				<Link to="/about" className="footer__link">
					<div className="footer__background"></div>
					<div className="footer__content">
						&lowast;
					</div>
				</Link>
			</footer>
		);
	}
}

export default Footer;
