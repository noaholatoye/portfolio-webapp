import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Projects extends Component {
	render() {
		let data = [
			{
				img: "/assets/images/projects/nesg-webapp.jpg",
				title: "NESG WebApp",
				desc: "Corporate design of NESG UI/UX and front end web development",
				link: "https://essay.nesgroup.org/"
			},

			{
				img: "/assets/images/projects/interactive-dashboard.jpg",
				title: "Interactive Dashboard",
				desc: "Complete dashboard with JavaScript-driven charts and graph",
				link: "https://noaholatoye/interactive-dashboard/"
			},

			{
				img: "/assets/images/projects/employee-directory.jpg",
				title: "Employee Directory",
				desc:
					"Generate user with random API to grab information for 12 random employees.",
				link: "https://noaholatoye/employee-director/"
			},

			{
				img: "/assets/images/projects/interactive-video-player.jpg",
				title: "Interactive Video Player",
				desc:
					"Built an HTML5 video player using JavaScript and the HTML5 Video API.",
				link: "https://noaholatoye/interactive-video-player/"
			},

			{
				img: "/assets/images/projects/game-show-app.jpg",
				title: "Game Show App",
				desc:
					"Browser version of “Wheel of Success”, a word guessing game with random phrase. ",
				link: "https://noaholatoye/game-show-app/"
			},
			{
				img: "/assets/images/projects/restorante-demo-app.jpg",
				title: "Resorante Demo App",
				desc:
					"Built a responsive bootstrap 4 layout, by using the various JavaScript functions",
				link: "https://noaholatoye/restorante-demo-app/"
			}
		];
		let DataList = data.map((val, i) => {
			return (
				/* Start Single Feature */
				<Col md={6} className="feature" key={i}>
					<div className="photo project-content">
						<img
							className="side-a box-shadow"
							src={val.img}
							alt="Dazzling Auroras over Earth"
						/>
						<div className="photo-desc side-b">
							<h4>{val.title}</h4>
							<p>{val.desc}</p>
							<Button variant="info" href={val.link} target="_blank">
								VIEW
							</Button>
						</div>
					</div>
				</Col>
				/* End Single Feature */
			);
		});

		return (
			<div className="project-header">
				<h2 className="mt-5">Some of my completed projects</h2>
				<Container className="">
					{" "}
					<Row>
						{DataList} <hr />
					</Row>
				</Container>
			</div>
		);
	}
}

export default Projects;
