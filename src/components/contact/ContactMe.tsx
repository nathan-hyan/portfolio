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
        <Col md="7" className="highlighted">
          <Button className="w-75" variant="success">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </Button>
          <Button className="w-75" variant="danger">
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </Button>
          <Button className="w-75" variant="info">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Button>
        </Col>
        <Separator orientation="y" />
        <Col>
          <h1>Contact me! 👦</h1>
        </Col>
      </Row>
    </Container>
  );
}
