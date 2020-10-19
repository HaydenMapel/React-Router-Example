import React from "react";
import { About } from "../view/about.js";
import { Landing } from "../view/landing.js";
import { List } from "../view/list.js";
import { Profile } from "../view/profile.js";
import { NavBar } from "./navbar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//create your first component
export function Home() {
	return (
		<div>
			<Router>
				<NavBar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/about" component={About} />
						<Route path="/list" component={List} />
						<Route path="/profile/:name" component={Profile} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}
