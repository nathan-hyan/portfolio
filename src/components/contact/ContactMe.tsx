import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Separator from "../separator/Separator";
import ReactGA from "react-ga";

export default function ContactMe() {
  const handleButton = (button: string) => {
    ReactGA.event({
      category: "Button",
      action: `Presionó el botón ${button}`,
      label: "CONTACT_SITE",
    });

    switch (button) {
      case "whatsapp":
        window.location.href =
          "https://wa.me/543816176275?text=Hello%20Exequiel,%20I%27d%20like%20to%20talk%20to%20you%20about";
        break;

      case "mail":
        window.location.href = "mailto:exequiel@hyan.dev";
        break;

      case "linkedin":
        window.location.href = "https://www.linkedin.com/in/exequielm2048/";
        break;

      default:
        console.log("no");
    }
  };

  return (
    <Container fluid>
      <Row className="contact-me-screen">
        <Col md="7" xl="5" className="highlighted">
          <Button
            onClick={() => handleButton("whatsapp")}
            className="w-75"
            variant="success"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </Button>
          <Button
            onClick={() => handleButton("mail")}
            className="w-75"
            variant="danger"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </Button>
          <Button
            onClick={() => handleButton("linkedin")}
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
