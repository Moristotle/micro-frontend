import {
	createGenerateClassName,
	StylesProvider,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
export default () => {
	const generateClassName = createGenerateClassName({
		productionPrefix: "co",
	});

	return (
		<>
			<StylesProvider generateClassName={generateClassName}>
				<BrowserRouter>
					<Header />
					<hr />
					<MarketingApp />{" "}
				</BrowserRouter>
			</StylesProvider>
		</>
	);
};
