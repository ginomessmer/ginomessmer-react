import React, { Component } from 'react'
import moment from 'moment';

import me from '../../../assets/me.jpg';

export default class HomePage extends Component {
  render() {
		return (
			<div>
				<section className="hero is-fullheight is-primary">
					<div className="hero-body">
						<div className="container">
							<figure className="image is-128x128">
								<img className="is-rounded" src={me} />
							</figure>

							<h1 className="title">Gino Messmer</h1>
							{this.getMyAge()} years old. I develop software, drink coffee, work and study at medialesson GmbH.
						</div>
					</div>

					<div className="hero-foot">
						<nav className="tabs">
							<div className="container">
								<ul>
									<li><a href="https://www.github.com/ginomessmer"><span className="icon"><i className="fab fa-github"></i></span></a></li>
									<li><a href="https://www.medium.com/@ginomessmer"><span className="icon"><i className="fab fa-medium"></i></span></a></li>
									<li><a href="https://www.twitter.com/ginomessmer"><span className="icon"><i className="fab fa-twitter"></i></span></a></li>
									<li><a href="https://www.paypal.me/ginomessmer"><span className="icon"><i className="fab fa-paypal"></i></span></a></li>
								</ul>
							</div>
						</nav>
					</div>
				</section>

				<section className="section">
					<div className="container">
						<h2 className="subtitle">Hey there!</h2>
						<p>
							I'm Gino Messmer, a passionate software developer from Germany, currently working at medialesson GmbH and studying Applied Computer Science at DHBW Karlsruhe.
						</p>
					</div>
				</section>

				<section className="section"></section>

				<section className="section"></section>
			</div>
		)
	}

	getMyAge(): number {
		let birthdate = Date.UTC(1999, 4, 1);
		let now = Date.now();

		let years = moment.duration(now - birthdate).asYears();
		return Math.floor(years);
	}
}
