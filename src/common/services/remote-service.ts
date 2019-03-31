import Meta from "../../data/meta";

export const remoteDataPath: string = process.env.REACT_APP_REMOTE_CONFIG as string;

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
