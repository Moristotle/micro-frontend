import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		import("marketing/MarketingApp")
			.then((module) => {
				const { onParentNavigate } = module.mount(ref.current, {
					onNavigate: ({ pathname: nextPathname }) => {
						const { pathname } = history.location;

						if (pathname !== nextPathname) {
							history.push(nextPathname);
						}
					},
				});
				history.listen(onParentNavigate);
			})
			.catch((err) => {
				console.error("Error loading marketing app", err);
				ReactDOM.findDOMNode(
					ref.current
				).innerHTML = `<h2>Error loading marketing app</h2> `;
			});
	}, []);

	return <div ref={ref} />;
};
