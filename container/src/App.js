import React, { Suspense, lazy, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
	createGenerateClassName,
	StylesProvider,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
	productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push("/dashboard");
		}

		if (!isSignedIn && history.location.pathname === "/dashboard") {
			history.push("/");
		}
	}, [isSignedIn]);

	return (
		<>
			<Router history={history}>
				<StylesProvider generateClassName={generateClassName}>
					<div>
						<Header
							isSignedIn={isSignedIn}
							onSignOut={() => setIsSignedIn(false)}
						/>
						<Suspense fallback={<Progress />}>
							<Switch>
								<Route
									path="/auth"
									render={() => (
										<AuthLazy onSignIn={() => setIsSignedIn(true)} />
									)}
								/>
								<Route path="/dashboard" render={() => <DashboardLazy />} />
								<Route path="/" component={MarketingLazy} />
							</Switch>
						</Suspense>
					</div>
				</StylesProvider>
			</Router>
		</>
	);
};
