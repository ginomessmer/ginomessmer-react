import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="content has-text-centered has-text-white">
					<p>
						&copy; 2019
						<p className="is-size-7">
							Written in React, proudly hosted with Docker on Azure
						</p>
					</p>
				</div>
			</footer>
		)
	}
}
