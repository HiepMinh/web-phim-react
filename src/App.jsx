import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import indexRouter from "./Router/RouterConfig";
import { CssBaseline } from "@material-ui/core";
class App extends Component {
	render() {
		return (
			<Fragment>
				<CssBaseline />
				<Router>
					<Switch>
						{this.RouterOutlet(indexRouter)}
					</Switch>
				</Router>
			</Fragment>

		);
	}
	RouterOutlet = (routes) => {
		let res = null;
		if (routes.length > 0) {
			res = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						component={route.component}
						exact={route.exact}
					/>
				);
			})
		}
		return res;
	}
}

export default App;
