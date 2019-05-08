import React, { Component } from 'react'
import moment from 'moment';

import HeroHeader from './hero';
import { MetaContext } from '../../../common/context/meta-context';

import Project from '../../../data/project';
import Post from '../../../data/post';
import { ProjectList } from '../../../features/projects';

export default class HomePage extends Component {
  render() {
		return (
			<div>
				<HeroHeader />

				<div className="has-background-white">
					{this.renderAbout()}

					<section className="section">
						<div className="container">
							<div className="columns">
								<div className="column">
									<h3 className="subtitle is-marginless">Latest Posts</h3>
									<div className="is-size-6">
										{this.renderPostsList()}
									</div>

									<hr/>
									<small><a href="https://www.medium.com/@ginomessmer">Follow me</a> on Medium for updates.</small>
								</div>

								<div className="column">
									<h3 className="subtitle is-marginless">Latest Projects</h3>
									{this.renderProjectsList()}
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}

	renderAbout() {
		return (
			<section className="section">
				<div className="container">
					<h2 className="subtitle is-size-4 is-marginless">Hey there!</h2>
					<p className="is-size-5">
						I'm Gino Messmer, a passionate software developer from Germany, currently working at medialesson GmbH and studying Applied Computer Science at DHBW Karlsruhe.
					</p>
				</div>

				<hr/>

				<div className="container">
					<div className="columns is-size-7">
						<div className="column is-narrow">
							<ul>
								<li>&raquo; .NET, C#, Azure, React, UWP</li>
								<li>&raquo; Visual Studio, Git, DevOps, CI&CD</li>
								<li>&raquo; Windows, Ubuntu Server, Docker</li>
							</ul>
						</div>
						<div className="column">
							<ul>
								<li>&raquo; German, English</li>
								<li>&raquo; Traveller, photography</li>
								<li>&raquo; Coffee obviously</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}

	renderPostsList() {
		return (
			<MetaContext.Consumer>
				{meta => (
					<ul>
						{meta.posts.reverse().map((i: Post) =>
							<li key={Math.random()}>&raquo; <a href={i.link}>{i.title}</a></li>
						)}
					</ul>
				)}
			</MetaContext.Consumer>
		)
	}

	renderProjectsList() {
		return (
			<MetaContext.Consumer>
				{meta => (
					<ProjectList projects={meta.projects} />
				)}
			</MetaContext.Consumer>
		)
	}
}
