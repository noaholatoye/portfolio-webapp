import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className={`app-about ${this.props.horizontalabout}`} id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center mb--40">
								<h2>
									ABOUT <span className="theme-color">Me</span>
								</h2>
								<img
									className="image-1"
									src="/assets/images/app/title-icon.png"
									alt="App Landing"
								/>
								<img
									className="image-2"
									src="/assets/images/app/title-icon-2.png"
									alt="App Landing"
								/>
								<img
									className="image-3"
									src="/assets/images/app/title-icon-3.png"
									alt="App Landing"
								/>
								<p>
									I am a life-long learner and a frontend developer. For the
									past decade, I've played the role of a designer.
									Interestingly, I became passionate about frontend technology
									in 2016. Ever since then, my design experience has paid off.{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-5 offset-lg-1 mt--40">
							<div className="about-thumbnail mr--35">
								<img
									className="image-1"
									src="/assets/images/app/back-view.png"
									alt="App Landing"
								/>
								<img
									className="image-2"
									src="/assets/images/app/mobile-2.png"
									alt="App Landing"
								/>
								<img
									className="image-3"
									src="/assets/images/app/mobile-3.png"
									alt="App Landing"
								/>
							</div>
						</div>
						<div className="col-lg-6 mt--40">
							<div className="about-content">
								<h2 className="title">
									DEVELOPMENT <span className="theme-color">APPROACH</span>
								</h2>
								<p>
									You have an idea; you need someone to bring it to life. Or you
									already have a product that needs to be redefined to meet the
									demand of target audience!. I can make these processes
									seamless for you! LET'S BUILD SOMETHING AMAZING TOGETHER. We
									can both take your idea, your product to the next level. Let's
									have a chat and discuss your plan!
								</p>
								<details>
									<summary>Education & Experience</summary>
									<div id="experience">
										<section>
											<h3 className="work theme-color">Work History</h3>
											<div className="history-details">
												<h4>Senior Designer </h4>
												<p className="company-icon">NESG</p>
												<p className="date-icon">2016-Presents</p>
											</div>
										</section>
										<section>
											<h3 className="education theme-color">Education</h3>
											<div className="history-details">
												<h4>Front-End Web Frameworks </h4>
												<p className="company-icon">University of Hong Kong</p>
												<p className="date-icon">2019</p>
											</div>
										</section>
									</div>
								</details>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
