import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Separator from "../separator/Separator";
import { skills } from "./data";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <Container fluid>
      <Row className="skills-screen">
        <Col className="highlighted">
          <h1>Skills 🔧</h1>
        </Col>
        <Separator orientation="y" />
        <Col md="7" className="center-in-screen">
          <Row>
            <Col>
              <SkillBar skill={skills[0]} />
            </Col>
            <Col>
              <SkillBar skill={skills[3]} />
            </Col>
          </Row>
          <Row>
            <Col>
              <SkillBar skill={skills[2]} />
            </Col>
            <Col>
              <SkillBar skill={skills[1]} />
            </Col>
          </Row>
          <Row>
            <Col>
              <SkillBar skill={skills[4]} />
            </Col>
            <Col>
              <SkillBar skill={skills[5]} />
            </Col>
          </Row>
          {/*   {skills.map((skill, index) => (
            <SkillBar skill={skill} key={index} />
          ))} */}
        </Col>
      </Row>
    </Container>
  );
}
