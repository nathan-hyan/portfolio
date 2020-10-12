import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
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
          <Row>
            <Col>
              <Button
                className="w-100"
                href={`${process.env.PUBLIC_URL}/assets/files/cv-exequiel-mleziva.pdf`}
              >
                <FontAwesomeIcon icon={faDownload} /> Download my resume
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="w-100" href="https://gitlab.com/nathan-hyan">
                <FontAwesomeIcon icon={faGitlab} /> Gitlab
              </Button>
            </Col>
            <Col>
              <Button className="w-100" href="https://github.com/nathan-hyan">
                <FontAwesomeIcon icon={faGithub} /> Github
              </Button>
            </Col>
          </Row>
        </Col>
        <Separator orientation="y" />
        <Col className="desktop">
          <Image
            className="shadow"
            roundedCircle
            height={300}
            src={`${process.env.PUBLIC_URL}/assets/img/profile.webp`}
          />
        </Col>
      </Row>
    </Container>
  );
}
