import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { carouselType } from "./data";
import TechIcon from "./TechIcon";

export default function CustomCarousel({ data }: { data: carouselType[] }) {
  return (
    <Carousel>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              width: "100vw",
              height: "500px",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Carousel.Caption
            className="mb-5 rounded"
            style={{
              background: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <h3>{item.title}</h3>
            <small>{item.subtitle}</small>
            <br />
            <br />
            {item.tech.map((tech, index) => (
              <TechIcon tech={tech} key={index} />
            ))}
            <br />
            <br />
            {item.repo ? (
              <Button target="_blank" href={item.repo} variant="primary mr-3">
                <FontAwesomeIcon icon={faGitlab} /> Repository
              </Button>
            ) : null}
            <Button target="_blank" href={item.url} variant="secondary">
              <FontAwesomeIcon icon={faGlobe} /> Visit page
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
