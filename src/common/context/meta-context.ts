import React from "react";
import Meta from "../../data/meta";

export const MetaContext = React.createContext<Meta>({
	posts: [],
	projects: []
});