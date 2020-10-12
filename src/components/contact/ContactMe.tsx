import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

export default function ContactMe() {
  return (
    <div>
      <h1>Contact me! 👦</h1>
      <Button variant="success">
        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
      </Button>
      <Button variant="danger">
        <FontAwesomeIcon icon={faEnvelope} /> Mail
      </Button>
      <Button variant="info">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>
    </div>
  );
}
