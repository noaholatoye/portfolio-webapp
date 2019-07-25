import React from "react";
import Skills from "./data/SkillsData";
import { Container, Row, Col } from "react-bootstrap";

const SkillsData = () => {
	let skills = Skills.map(skills => {
		return (
			<Col md={6} className="skills" key={skills.id}>
				<img
					className="skills-img box-shadow"
					src={skills.img_src}
					alt="skills"
				/>
				<h3 className="theme-color mt-3">{skills.name}</h3>
				<p className="mb-5">{skills.bio}</p>
			</Col>
		);
	});

	return (
		<div className="main-content">
			<h2 className="mt-5">What I do</h2>
			<Container className="group ">
				<Row>{skills}</Row>
			</Container>
		</div>
	);
};

export default SkillsData;
