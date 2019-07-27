import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

function Portfolio() {
	const [key, setKey] = useState("home");

	return (
		<div className="container-portfolio" id="features">
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={k => setKey(k)}
			>
				<Tab eventKey="home" title="Home">
					<Home />
				</Tab>

				<Tab eventKey="contact" title="What I Do">
					<Skills />
				</Tab>
				<Tab eventKey="profile" title="Projects">
					<Projects />
				</Tab>
			</Tabs>
		</div>
	);
}

export default Portfolio;
