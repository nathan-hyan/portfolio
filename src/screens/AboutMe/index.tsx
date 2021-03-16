import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Separator from 'screens/Separator';
import sillouhete from 'assets/sil.svg';

import styles from './styles.module.scss';

const AboutMe: React.FC = () => {
  const AGE = new Date().getFullYear() - 1995;

  return (
    <Container fluid>
      <Row className={styles.aboutMe}>
        <Col className={styles.profile}>
          <Image src={sillouhete} />
        </Col>
        <Separator orientation="y" />
        <Col className={`highlighted ${styles.highlighted}`}>
          <div className="p-5">
            <h1 className={styles.h1}>
              Hello There!{' '}
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </h1>
            <p className={`${styles.p} lead`}>I&apos;m Exequiel</p>
            <p className={styles.p}>
              A {AGE} year-old front-end web developer. I&apos;m a curious guy
              who&apos;s always experimenting with something new, thriving to
              learn new stuff everyday and trying to get the best of everything
              to do.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
