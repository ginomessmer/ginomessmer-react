import React from 'react';
import Project from '../../data/project';

export const ProjectList = (props: { projects: Project[] }) => {
	return (
		<ul>
			{
				props.projects.map((i: Project) =>
					<li key={Math.random()}>&raquo; <a href={i.link} target="_blank">{i.title}</a> - {i.description}</li>
				)
			}
		</ul>
	)
}
