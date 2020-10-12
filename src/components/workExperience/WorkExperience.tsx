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
          <h1>work experience 👩‍🏭</h1>
        </Col>
        <Separator orientation="y" />
        <Col className="highlighted">
          {workExperience.map((work, index) => (
            <WorkDetail key={index} work={work} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
