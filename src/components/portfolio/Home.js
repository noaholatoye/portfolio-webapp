import React, { Component } from "react";

class Home extends Component {
	handleSubmit = e => {
		e.preventDefault();
		let teacherName = this.name.value;
		let teacherTopic = this.topic.value;
		let path = `teachers/${teacherTopic}/${teacherName}`;
		this.props.history.push(path);
	};

	render() {
		return (
			<div className="main-content home">
				<h2>Front End Development Directory</h2>
				<p>
					This fun directory is a project for my <em>Front End Development</em>{" "}
					competency.
				</p>
				<p>
					While web design is the presentation of a webpage, front end
					development is how that design gets executed on the web. Have you ever
					looked at your favourite website and wondered what triggers the
					interactivities (formatted pages and buttons behaviour when clicked)?
					All of those visible site features are powered through the front end
					technologies.
				</p>
				<p>
					I have grasp expertise in web design and front end technologies. My
					continuous learning on mobile-web developments has put me at the edge
					of these ever-evolving industry.
				</p>
				<hr />
			</div>
		);
	}
}

export default Home;
