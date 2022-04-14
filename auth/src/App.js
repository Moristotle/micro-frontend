import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

// used to create a unique prefix for the generated classnames in production - isolate css for marketing and prevent spillover
// This is a workaround for the issue: usage of the same component library accross isolated apps and potential clash of css naming
const generateClassName = createGenerateClassName({
	productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
	return (
		<>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route
							path="/auth/signin/"
							render={() => <Signin onSignIn={onSignIn} />}
						/>

						<Route
							path="/auth/signup/"
							render={() => <Signup onSignIn={onSignIn} />}
						/>
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};
