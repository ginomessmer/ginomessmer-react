import React, { Component } from 'react'
import moment from 'moment';

import HeroHeader from './hero';
import { MetaContext } from '../../../common/context/meta-context';

import Project from '../../../data/project';
import Post from '../../../data/post';
import { ProjectList } from '../../../features/projects';
import Meta from '../../../data/meta';

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
					<div className="skills">
						<div className="tags">
							<span className="tag is-info">.NET</span>
							<span className="tag is-info">C#</span>
							<span className="tag is-info">Azure</span>
							<span className="tag is-info">React</span>
							<span className="tag is-info">UWP</span>
						</div>
						<div className="tags">
							<span className="tag is-dark">Visual Studio</span>
							<span className="tag is-dark">Git</span>
							<span className="tag is-dark">DevOps</span>
							<span className="tag is-dark">CI&CD</span>
						</div>
						<div className="tags">
							<span className="tag is-warning">Windows</span>
							<span className="tag is-warning">Ubuntu Server</span>
							<span className="tag is-warning">Docker</span>
						</div>
						<div className="tags">
							<span className="tag is-light">German</span>
							<span className="tag is-light">English</span>
							<span className="tag is-light">Traveller</span>
							<span className="tag is-light">Coffee</span>
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
				{(meta: Meta) => (
					<ProjectList projects={meta.projects} />
				)}
			</MetaContext.Consumer>
		)
	}
}
