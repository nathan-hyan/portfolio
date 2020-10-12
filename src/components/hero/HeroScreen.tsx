import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Separator from "../separator/Separator";

export default function HeroScreen() {
  return (
    <Container fluid>
      <Row className="hero-screen">
        <Col md="5" className="highlighted">
          <div className="phone">
            <Image
              roundedCircle
              height={300}
              src={`${process.env.PUBLIC_URL}/assets/img/profile.webp`}
            />
          </div>
          <h1>Exequiel Mleziva</h1>
          <h2>Front-End Web Developer</h2>
          <Button>
            <FontAwesomeIcon icon={faDownload} /> Download my resume
          </Button>
          <Button>
            <FontAwesomeIcon icon={faGitlab} /> Gitlab
          </Button>
        </Col>
        <Separator orientation="y" />
        <Col className="desktop">
          <Image
            roundedCircle
            height={300}
            src={`${process.env.PUBLIC_URL}/assets/img/profile.webp`}
          />
        </Col>
      </Row>
    </Container>
  );
}
