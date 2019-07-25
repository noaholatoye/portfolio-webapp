import React, { Component } from "react";
import NESGEssayApp from "./modals/NESGEssayApp";
import ImageGallery from "./modals/ImageGallery";
import SVGTransition from "./modals/SVGTransition";

class RecentProjects extends Component {
	render() {
		let data = [
			{
				icon: "zmdi zmdi-code",
				title: "Registration WebApp",
				desc:
					"A layout allows the students to register for an essay contest with the necessary information needed for participation.",
				btn: <NESGEssayApp />
			},

			{
				icon: "zmdi zmdi-image",
				title: "Image Gallery",
				desc:
					"Image gallery using React and the Flickr API. After creating the project with create-react-app, I also built the gallery components.",
				btn: <ImageGallery />
			},

			{
				icon: "zmdi zmdi-time",
				title: "SVG Transition",
				desc:
					"Fun transitioning of  50DaysOfCodeALC4 (Andela Learning Community) scholarship Adds powered by Andela, Pluralsight and Google.",
				btn: <SVGTransition />
			}
		];
		let DataList = data.map((val, i) => {
			return (
				<div className="col-lg-4 service-column" key={i}>
					<div className="single-service text-center">
						<div className="service-icon">
							<i className={`${val.icon}`} />
						</div>
						<h4 className="title">{val.title}</h4>
						<p className="desc">{val.desc}</p>
					</div>
					<div>{val.btn}</div>
				</div>
			);
		});

		return (
			<div>
				{/* Start Service Area */}

				<div className={`service-area ${this.props.horizontal}`}>
					<h2 className="recent-projects">Recent Projects</h2>
					<div className="container">
						<div className="row">{DataList}</div>
					</div>
				</div>

				{/* End Service Area */}
			</div>
		);
	}
}

export default RecentProjects;
