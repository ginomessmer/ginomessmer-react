import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactMarkdown from 'react-markdown';

import { getProjectMarkdown } from '../../common/services/remote-service';

export const ProjectSummaryContainer = (props: { projectId: string, isOpen: boolean }) => {

	const [markdownInput, setMarkdownInput] = useState<string>();

	useEffect(() => {
		return () => {
			getProjectMarkdown(props.projectId).then(result => {
				if (result === null) {
					return;
				}

				setMarkdownInput(result);
			});
		};
	}, [])

	return (
		<ReactModal isOpen={props.isOpen}>
			<ReactMarkdown source={markdownInput} />
		</ReactModal>
	);
}
