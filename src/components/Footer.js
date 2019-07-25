import React, { Component } from "react";
class Footer extends Component {
	render() {
		return (
			<div>
				<div className={`footer-area ${this.props.horizontal}`} id="support">
					<div className="footer-bg" />
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center mb--40">
									<h2 className="text-white">
										GET <span className="theme-color">IN TOUCH</span>
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
									<p className="text-white">
										Conversation makes it easier to decide when looking for the
										right development team. I believe our discussion will
										produce a positive result. To reach me, kindly use the
										details below
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="">
								<div className=" col-lg- col-xl-12  offset-xl-2 mt_md--40 mt_sm--40 footer-links">
									<div className="conatct-info">
										<div className="single-contact-info">
											<div className="contact-icon">
												<i className="zmdi zmdi-phone" />
											</div>
											<div className="contact-text">
												<span>+234 (0) 706 366 8889</span>
											</div>
										</div>
										<div className="single-contact-info">
											<div className="contact-icon">
												<i className="zmdi zmdi-globe-alt" />
											</div>
											<div className="contact-text">
												<span>
													noaholatoye101@gmail.com
													<br />
													https://noaholatoye.com/
												</span>
											</div>
										</div>
										<div className="single-contact-info">
											<div className="contact-icon">
												<i className="zmdi zmdi-pin" />
											</div>
											<div className="contact-text">
												<span>
													Oba Adeyinka Oyekan Avenue,
													<br /> Ikoyi-Lagos.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg- offset-lg-2 col-xl-4 offset-xl-4">
								<div className="footer-links text-center">
									<a
										href="https://www.facebook.com/NoahOlatoye"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="zmdi zmdi-facebook" />
									</a>
									<a
										href="https://twitter.com/noaholatoye"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="zmdi zmdi-twitter" />
									</a>
									<a
										href="mailto:noaholatoye101@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="zmdi zmdi-google" />
									</a>
									<a
										href="https://www.linkedin.com/in/noah-olatoye-002b04115/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="zmdi zmdi-linkedin" />
									</a>
									<a
										href="https://www.pinterest.com/noaholatoye/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="zmdi zmdi-pinterest" />
									</a>
									<a
										href="https://www.youtube.com/channel/UCiPbPo_AJhlDYUbDAyI3Knw?view_as=subscriber"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="zmdi zmdi-youtube" />
									</a>
								</div>
								<div className="footer-text text-center">
									<span>
										Copyright © 2019{" "}
										<a
											href="https://www.linkedin.com/in/noah-olatoye-002b04115/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Noah Olatoye
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tap-top">
					<div>
						<i className="zmdi zmdi-long-arrow-up" />
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
