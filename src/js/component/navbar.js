import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<Link to="/" className="nav-link">
							<li className="nav-item">Home</li>
						</Link>
						<Link to="/about" className="nav-link">
							<li className="nav-item">About</li>
						</Link>
						<Link to="/list" className="nav-link">
							<li className="nav-item">List</li>
						</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
}
