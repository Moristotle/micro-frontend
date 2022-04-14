import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		import("dashboard/DashboardApp")
			.then((module) => {
				module.mount(ref.current);
			})
			.catch((err) => {
				console.error("Error loading dashboard app", err);
				ReactDOM.findDOMNode(
					ref.current
				).innerHTML = `<h2>Error loading dashboard app</h2> `;
			});
	}, []);

	return <div ref={ref} />;
};
