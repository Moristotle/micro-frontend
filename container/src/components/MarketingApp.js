import React, { useRef, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
export default () => {
	const App = lazy(() => import("marketing/MarketingApp"));

	/*
	const ref = useRef(null);

	useEffect(() => {
		import("marketing/MarketingApp")
			.then((module) => {
				module.mount(ref.current);
			})
			.catch((err) => {
				console.error("Error loading marketing app", err);
				ReactDOM.findDOMNode(
					ref.current
				).innerHTML = `<h2>Error loading marketing app</h2> `;
			});
	}, []);

	*/

	return <App />;
};
