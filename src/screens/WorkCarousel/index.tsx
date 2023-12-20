import React from 'react'
import { Container } from 'react-bootstrap'
import CustomCarousel from './components/CustomCarousel'
import { CAROUSEL_DATA } from './constants'

const WorkCarousel: React.FC = () => (
  <Container fluid>
    <CustomCarousel data={CAROUSEL_DATA} />
  </Container>
)

export default WorkCarousel
