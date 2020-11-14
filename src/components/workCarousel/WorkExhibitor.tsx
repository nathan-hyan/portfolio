import React from "react";
import { Container } from "react-bootstrap";
import CustomCarousel from "./CustomCarousel";
import { data } from "./data";

export default function WorkExhibitor() {
  return (
    <Container fluid>
      <CustomCarousel data={data} />
    </Container>
  );
}
