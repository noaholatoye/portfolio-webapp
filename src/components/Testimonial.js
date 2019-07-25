import React from "react";
import Slider from "react-slick";

import { testimonial, testimonial2 } from "./script";

class Testimonial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
	}

	componentDidMount() {
		this.setState({
			nav1: this.testimonial,
			nav2: this.testimonial2
		});
	}

	render() {
		return (
			<div className="testimonial-wrapper pt--120 text-center" id="reviews">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="tectimonial-activation">
								<div className="section-title text-center mb--80">
									<h2>
										WHAT PEOPLE <span className="theme-color">SAY</span>
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
										Design is a universal thing; as such, meeting the creative
										needs of the individual is crucial. Over the past years,
										I've worked with a series of great people. See what they
										say;
									</p>
								</div>
								<div className="row">
									<div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
										<Slider
											{...testimonial}
											asNavFor={this.state.nav2}
											ref={slider => (this.testimonial = slider)}
											className="testimonial-image-slider text-center"
										>
											<div className="sin-testiImage">
												<img
													src="/assets/images/client/tomiwa.jpg"
													alt="testimonial 1"
												/>
											</div>
											<div className="sin-testiImage">
												<img
													src="/assets/images/client/kevwe.jpg"
													alt="testimonial 2"
												/>
											</div>
											<div className="sin-testiImage">
												<img
													src="/assets/images/client/uche.jpg"
													alt="testimonial 3"
												/>
											</div>
											<div className="sin-testiImage">
												<img
													src="/assets/images/client/1.png"
													alt="testimonial 2"
												/>
											</div>
											<div className="sin-testiImage">
												<img
													src="/assets/images/client/1.png"
													alt="testimonial 3"
												/>
											</div>
										</Slider>
									</div>
								</div>

								<Slider
									{...testimonial2}
									asNavFor={this.state.nav1}
									ref={slider => (this.testimonial2 = slider)}
									className="testimonial-text-slider text-center"
								>
									<div className="sin-testiText">
										<h2>Tomiwa Adefokun</h2>
										<div className="client-rating">
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star-half color" />
										</div>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised words which
											don't look even slightly believable.
										</p>
									</div>
									<div className="sin-testiText">
										<h2> Kevwe Kuale</h2>
										<div className="client-rating">
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star-half color" />
										</div>
										<p>
											I have worked with Noah Olatoye for a few months and I
											could sense his devotion and passion to what he does.
											Seeking to grow better and be the best at what he does is
											truly extraordinary.
										</p>
									</div>
									<div className="sin-testiText">
										<h2>Uchenna Joel</h2>
										<div className="client-rating">
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star-half color" />
										</div>
										<p>
											Noah Olatoye has an eye for design. Design / Consistency
											is a factor never misses. Literally if he says its good,
											then its good!
										</p>
									</div>
									<div className="sin-testiText">
										<h2>Mustafa Muhammed</h2>
										<div className="client-rating">
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star-half color" />
										</div>
										<p>
											Nam nec tellus a odio tincidunt This is Photoshop's
											version of Lorem Ipsum. Proin gravida nibh vel velit
											auctor aliquet. Aenean tincidunt sollicitudin, lorem quis
											bibendum auctor, nisi elit consequat ipsum Photoshop.
										</p>
									</div>
									<div className="sin-testiText">
										<h2>Michael George</h2>
										<div className="client-rating">
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star color" />
											<i className="zmdi zmdi-star-half color" />
										</div>
										<p>
											Nam nec tellus a odio tincidunt This is Photoshop's
											version of Lorem Ipsum. Proin gravida nibh vel velit
											auctor aliquet. Aenean tincidunt sollicitudin, lorem quis
											bibendum auctor, nisi elit consequat ipsum Photoshop.
										</p>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Testimonial;
