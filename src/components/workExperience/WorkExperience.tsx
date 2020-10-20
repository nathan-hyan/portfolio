import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Separator from "../separator/Separator";
import { workExperience } from "./data";
import WorkDetail from "./WorkDetail";

export default function WorkExperience() {
  return (
    <Container fluid>
      <Row className="work-experience-screen">
        <Col className="left-side">
          <h1>
            work experience{" "}
            <span role="img" aria-label="worker">
              👷
            </span>
          </h1>
        </Col>
        <Separator orientation="y" />
        <Col md="7" className="highlighted">
          {workExperience.map((work, index) => (
            <WorkDetail key={index} work={work} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
