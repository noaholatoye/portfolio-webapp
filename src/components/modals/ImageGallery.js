import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ImageGallery = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				className="button-default recent-project-modal"
				variant="primary"
				onClick={handleShow}
			>
				View Projects
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Recent Projects</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card>
						<Card.Header> React Image Gallery WebApp</Card.Header>
						<Card.Body>
							<Card.Img
								variant="top"
								src="/assets/images/modal/image-gallery.png"
							/>
							<Button
								className="button-color mt-3"
								variant="secondary"
								href="https://noaholatoye.github.io/react-photo-gallery/"
								target="_blank"
							>
								VISIT
							</Button>
						</Card.Body>
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="button-default button-olive"
						variant="primary"
						onClick={handleClose}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ImageGallery;
