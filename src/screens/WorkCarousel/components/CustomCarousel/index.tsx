import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { carouselType } from '../../constants';
import TechIcon from '../TechIcon';

import styles from './styles.module.scss';

type Props = {
  data: carouselType[];
};

const CustomCarousel: React.FC<Props> = ({ data }: Props) => (
  <Carousel>
    {data.map((item) => (
      <Carousel.Item key={item.id}>
        <div
          className={styles.container}
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <Carousel.Caption className={`${styles.caption} mb-5 rounded`}>
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
