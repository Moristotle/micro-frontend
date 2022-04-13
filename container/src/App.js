import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
export default () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<hr />
				<MarketingApp />{" "}
			</BrowserRouter>
		</>
	);
};
