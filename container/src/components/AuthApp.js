import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
export default ({ onSignIn }) => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		import("auth/AuthApp")
			.then((module) => {
				const { onParentNavigate } = module.mount(ref.current, {
					initialPath: history.location.pathname,
					onNavigate: ({ pathname: nextPathname }) => {
						const { pathname } = history.location;

						if (pathname !== nextPathname) {
							history.push(nextPathname);
						}
					},
					onSignIn,
				});
				history.listen(onParentNavigate);
			})
			.catch((err) => {
				console.error("Error loading Auth app", err);
				ReactDOM.findDOMNode(
					ref.current
				).innerHTML = `<h2>Error loading Auth app</h2> `;
			});
	}, []);

	return <div ref={ref} />;
};
