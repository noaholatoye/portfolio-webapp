import React, { Component } from "react";
// import AppParticles from "./AppParticles";

class HomePageBanner extends Component {
	render() {
		return (
			<div
				className={`slider-area bg-color ${this.props.horizontal} ${
					this.props.bgshape
				}`}
				id="home"
				data-bg-color="#2d3e50"
			>
				<div className="container h-100">
					<div className="row">
						<div className="col-lg-7 h-100">
							<div className="banner-text">
								<div className="banner-table-cell">
									<h1>
										I'm <br /> <span className="theme-color">Noah Olatoye</span>{" "}
									</h1>
									<p className="banner-rider">
										I love to effectively communicate through data
										visualisation.
									</p>
									<div className="banner-buttons">
										<a
											className="button-default button-white"
											href="https://teamtreehouse.com/noaholatoye"
											target="_blank"
											rel="noopener noreferrer"
										>
											View Achievements
										</a>
									</div>
								</div>
							</div>

							<div className="banner-apps">
								{/* Start Sinhle app */}
								<div className="single-app" id="html">
									<div className="single-app-table-cell">
										<img src="/assets/iconmoon/html5.svg" alt="HTML icon" />
										<h4>HTML</h4>
										<h3>102K</h3>
									</div>
								</div>

								{/* Start Sinhle app */}
								<div className="single-app" id="css">
									<div className="single-app-table-cell">
										<img
											src="/assets/iconmoon/csswizardry.svg"
											alt="CSS icon"
										/>
										<h4>CSS</h4>
										<h3>102K</h3>
									</div>
								</div>

								{/* Start Sinhle app */}
								<div className="single-app" id="node">
									<div className="single-app-table-cell">
										<img
											src="/assets/iconmoon/node-dot-js.svg"
											alt="Node.Js icon"
										/>
										<h4>Node.Js</h4>
										<h3>102K</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="banner-product-image text-right">
								<img
									className="image-1"
									src="/assets/images/app/banner-mobile-601X959.png"
									alt="App Landing"
								/>
								<img
									className="image-2"
									src="/assets/images/app/banner-mobile-2.png"
									alt="App Landing"
								/>
								<img
									className="image-3"
									src="/assets/images/app/banner-mobile-3.png"
									alt="App Landing"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* <AppParticles /> */}
				{/* <div className="particles-js" id="particles-js" /> */}
				<div className="particles-js" />
			</div>
		);
	}
}

export default HomePageBanner;
