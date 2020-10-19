import React from "react";
import { Link } from "react-router-dom";

export function List() {
	return (
		<div>
			<ul>
				<li>
					<Link
						to={{
							pathname: "/profile/Luke",
							content: "Son of Anakin"
						}}>
						Luke
					</Link>
				</li>
				<li>
					<Link
						to={{
							pathname: "/profile/Leia",
							content: "Daughter of Anakin, Mother of Ben"
						}}>
						Leia
					</Link>
				</li>
				<li>
					<Link
						to={{
							pathname: "/profile/Han",
							content: "Father of Ben"
						}}>
						Han
					</Link>
				</li>
			</ul>
		</div>
	);
}
