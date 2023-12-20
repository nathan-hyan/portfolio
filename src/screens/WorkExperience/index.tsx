import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Separator from '../Separator'
import { WORK_EXPERIENCE } from './constants'
import WorkDetail from './components/WorkDetail'

const WorkExperience: React.FC = () => (
  <Container fluid>
    <Row className="work-experience-screen">
      <Col className="left-side">
        <h1>
          Work experience{' '}
          <span role="img" aria-label="worker">
            👷
          </span>
        </h1>
      </Col>
      <Separator orientation="y" />
      <Col md="7" xl="6" className="highlighted">
        {WORK_EXPERIENCE.map((work) => (
          <WorkDetail key={work.id} work={work} />
        ))}
      </Col>
    </Row>
  </Container>
)

export default WorkExperience
