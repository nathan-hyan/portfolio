import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Separator from "../separator/Separator";

export default function AboutMe() {
  return (
    <Container fluid>
      <Row className="about-me">
        <Col className="image-profile">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/img/sil.svg`}
            height={100}
          />
        </Col>
        <Separator orientation="y" />
        <Col className="highlighted">
          <div className="p-5">
            <h1>
              Hello There!{" "}
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </h1>
            <p className="lead">I'm Exequiel</p>
            <p>
              a 25 year-old fullstack web developer. i'm a curious guy who's
              always experimenting with something new, thriving to learn new
              stuff everyday and trying to get the best of everything to do.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
