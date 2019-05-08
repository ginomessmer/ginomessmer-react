import Meta from "../../data/meta";

export const remoteDataPath: string = process.env.REACT_APP_REMOTE_CONFIG as string;
export const remoteProjectsRootPath: string = process.env.REACT_APP_PROJECTS_ROOT as string;

export const getMetaData = async (): Promise<Meta | null> => {
	let response = await fetch(remoteDataPath);
	if (response.ok) {
		let json = await response.json();
		return json as Meta;
	}

	return {
		posts: [],
		projects: []
	};
}

export const getProjectMarkdown = async (id: string): Promise<string | null> => {
	let response = await fetch(remoteProjectsRootPath + '/' + id + '.md');

	if (!response.ok) {
		return null;
	}

	return await response.text();
}
