import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Separator from "../separator/Separator";

export default function ContactMe() {
  return (
    <Container fluid>
      <Row className="contact-me-screen">
        <Col md="7" xl="5" className="highlighted">
          <Button
            href="https://wa.me/543816176275?text=Hello%20Exequiel!,%20i%27d%20like%20to%20talk%20to%20you%20about"
            className="w-75"
            variant="success"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </Button>
          <Button
            href="mailto:exequiel@hyan.dev"
            className="w-75"
            variant="danger"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </Button>
          <Button
            href="https://www.linkedin.com/in/exequielm2048/"
            className="w-75"
            variant="info"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Button>
        </Col>
        <Separator orientation="y" />
        <Col>
          <h1>
            Contact me!{" "}
            <span role="img" aria-label="Boy">
              👦
            </span>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}
