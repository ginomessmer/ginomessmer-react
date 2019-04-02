import React, { Component } from 'react'
import moment from 'moment';

import me from '../../../assets/me.jpg';
import { getAge } from '../../../common/helpers/math';

export default class HeroHeader extends Component {
	render() {
		return (
			<div className="is-unsplash">
				<section className="hero is-fullheight is-blur is-primary-drop">
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered">
								<div className="column is-narrow">
									<figure className="image is-128x128 m-bottom">
										<img className="is-rounded" src={me} />
									</figure>
								</div>
								<div className="column">
									<h1 className="title">Gino Messmer</h1>
									{getAge('01-04-1999')} years old. I develop software, drink coffee, work and study at medialesson GmbH.
								</div>
							</div>
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
			</div>
		)
	}
}
