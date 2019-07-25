import React from "react";
import { Button } from "react-bootstrap";

const Header = () => (
	<div>
		<span className="icn-logo">
			<i className="material-icons">code</i>
		</span>
		<ul className="main-nav-portfolio">
			<Button type="button">Home</Button>
			<Button type="button">Skills</Button>
		</ul>
	</div>
);

export default Header;
