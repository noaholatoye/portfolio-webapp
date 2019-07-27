import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<div className="app-header header--transparent sticker" id="main-menu">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-sm-5 col-5">
							<div className="logo">
								<a href={`${process.env.PUBLIC_URL}/`}>
									{/* <img className="logo-1" src="/assets/images/logo/logo.png" alt="app landing"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-2.png" alt="app landing"/>
                                    <img className="logo-3" src="/assets/images/logo/logo-3.png" alt="app landing"/> */}
									<div className="nav-logo">
										<img
											src="/assets/images/logo/noah-logo.svg"
											alt="Noah Logo"
										/>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-8 d-none d-lg-block">
							<div className="mainmenu-wrapper">
								<nav>
									<ul className="main-menu">
										<li className="active">
											<a href="#home">Home</a>
										</li>
										<li>
											<a href="#about">About</a>
										</li>
										<li>
											<a href="#features">Projects</a>
										</li>
										<li>
											<a href="mailto:noaholatoye101@gmail.com">Email Me</a>
										</li>
									</ul>
								</nav>
								<a
									className="button-default button-olive"
									href="https://drive.google.com/open?id=1Flx2DBWmOGMacl7ajPIAHygWL8M4sI9p"
									target="_blank"
									rel="noopener noreferrer"
								>
									Download Resume
								</a>
							</div>
						</div>
						<div className="col-sm-7 col-7 d-block d-lg-none">
							<div className="mobile-menu">
								<nav>
									<ul>
										<li className="active">
											<a href="#home">Home</a>
										</li>
										<li>
											<a href="#about">About</a>
										</li>
										<li>
											<a href="#features">Features</a>
										</li>
										<li>
											<a href="#pricing">Email Me</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
