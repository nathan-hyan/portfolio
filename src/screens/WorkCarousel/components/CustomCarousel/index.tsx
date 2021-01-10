import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { carouselType } from '../../constants';
import TechIcon from '../TechIcon';

type Props = {
  data: carouselType[];
};

const CustomCarousel: React.FC<Props> = ({ data }: Props) => (
  <Carousel>
    {data.map((item) => (
      <Carousel.Item key={item.id}>
        <div
          style={{
            width: '100vw',
            height: '500px',
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Carousel.Caption
          className="mb-5 rounded"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <h3>{item.title}</h3>
          <small>{item.subtitle}</small>
          <br />
          <br />
          {item.tech.map((tech) => (
            <TechIcon tech={tech} />
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

export default CustomCarousel;
