import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// used to create a unique prefix for the generated classnames in production - isolate css for marketing and prevent spillover
// This is a workaround for the issue: usage of the same component library accross isolated apps and potential clash of css naming
const generateClassName = createGenerateClassName({
	productionPrefix: "ma",
});

export default ({ history }) => {
	return (
		<>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route exact path="/pricing" component={Pricing} />
						<Route path="/" component={Landing} />
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};
