import React, { useState } from 'react';
import Project from '../../data/project';
import { ProjectSummaryContainer } from '.';

export const ProjectList = (props: { projects: Project[] }) => {

	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [projectId, setProjectId] = useState<string>('');

	const handleProjectClick = (projectId: string) => {
		setModalOpen(true);
		setProjectId(projectId);
	}

	return (
		<div>
			<ul>
				{
					props.projects.map((i: Project) =>
						<li key={i.key}>&raquo; <a onClick={() => handleProjectClick(i.key)}>{i.title}</a> - {i.description}</li>
					)
				}
			</ul>
			<ProjectSummaryContainer isOpen={modalOpen} projectId={projectId} closeCallback={() => setModalOpen(false)} />
		</div>
	);
}
