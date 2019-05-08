import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactMarkdown from 'react-markdown';

import { getProjectMarkdown } from '../../common/services/remote-service';

export const ProjectSummaryContainer = (props: { projectId: string | undefined, isOpen: boolean, closeCallback: Function }) => {

	const [markdownInput, setMarkdownInput] = useState<string>();

	useEffect(() => {
		if (props.projectId === '') { return; }

		getProjectMarkdown(props.projectId as string).then(result => {
			if (result === null) {
				return;
			}

			setMarkdownInput(result);
		});
	}, [props.projectId]);

	return (
		<ReactModal isOpen={props.isOpen}>
			<button className="delete" style={{float: 'right'}} onClick={() => props.closeCallback()}></button>
			<ReactMarkdown className="project-summary" escapeHtml={false} source={markdownInput} />
		</ReactModal>
	);
}
