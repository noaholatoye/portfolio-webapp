import React, { Component } from "react";
import Navbar from "./components/Navbar";
import HeroOlive from "./components/HomePageBanner";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
// import AutoplayedTabs from "./components/portfolio/autoplayed-tab";
import Portfolio from "./components/portfolio/Portfolio";
import RecentProjects from "./components/RecentProjects";

class HomeHorizontal extends Component {
	render() {
		return (
			<div>
				{/* Header Navbar */}
				<Navbar />

				{/* Slider */}
				<HeroOlive horizontal="horizontal" bgshape="bg-shape" />

				{/* About */}
				<About horizontalabout="horizontal-about" />

				{/*Recent Projects */}
				<RecentProjects horizontal="horizontal" />

				{/*Portfolio */}
				<Portfolio horizontalfeature="horizontal-feature" />

				{/* Pricing */}
				<Testimonial />

				{/* Footer */}
				<Footer horizontal="horizontal" />
			</div>
		);
	}
}

export default HomeHorizontal;
