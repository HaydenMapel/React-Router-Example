import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

export function Profile() {
	let params = useParams();
	let content = useLocation().content;
	let history = useHistory();
	return (
		<div>
			<h1>{params.name}</h1>
			<p>{content}</p>
			<button onClick={() => history.goBack()}>Go Back</button>
		</div>
	);
}
