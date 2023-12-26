import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Separator from '../Separator'
import { SKILLS } from './constants'
import SkillBar from './components/SkillBar'

const Skills: React.FC = () => (
  <Container fluid>
    <Row className="skills-screen">
      <Col className="highlighted">
        <h1>
          Skills{' '}
          <span role="img" aria-label="wrench">
            🔧
          </span>
        </h1>
      </Col>
      <Separator orientation="y" />
      <Col md="7" className="center-in-screen">
        <Row>
          <Col sm="12" md="6">
            <SkillBar skill={SKILLS[0]} />
          </Col>
          <Col sm="12" md="6">
            <SkillBar skill={SKILLS[1]} />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6">
            <SkillBar skill={SKILLS[2]} />
          </Col>
          <Col sm="12" md="6">
            <SkillBar skill={SKILLS[3]} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

export default Skills
