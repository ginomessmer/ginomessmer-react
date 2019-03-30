import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="content has-text-centered has-text-white">
					<p>
						&copy; 2019
						<p className="is-size-7">
							Written in React, proudly hosted by Docker on Azure
						</p>

						<p className="is-size-7">
							<Link to="/privacy">Privacy Policy</Link>
						</p>
					</p>
				</div>
			</footer>
		)
	}
}
