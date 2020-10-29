import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Separator from "../separator/Separator";
import ReactGA from "react-ga";

export default function HeroScreen() {
  const handleButton = (button: string) => {
    ReactGA.event({
      category: "Button",
      action: `Presionó el botón ${button}`,
      label: "CONTACT_SITE",
    });

    switch (button) {
      case "resume":
        window.location.href = `${process.env.PUBLIC_URL}/assets/files/resume.pdf`;
        break;

      case "github":
        window.location.href = `https://github.com/nathan-hyan`;
        break;

      case "gitlab":
        window.location.href = `https://gitlab.com/nathan-hyan`;
        break;
    }

    console.log("EVENT");
  };

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
          <Row className="pb-3">
            <Col>
              <Button
                variant="info"
                className="w-100"
                onClick={() => handleButton("resume")}
              >
                <FontAwesomeIcon icon={faDownload} /> Download my resume
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mr-3">
              <Button
                variant="info"
                className="w-100"
                onClick={() => handleButton("gitlab")}
              >
                <FontAwesomeIcon icon={faGitlab} /> Gitlab
              </Button>
            </Col>
            <Col>
              <Button
                variant="info"
                className="w-100"
                onClick={() => handleButton("github")}
              >
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
