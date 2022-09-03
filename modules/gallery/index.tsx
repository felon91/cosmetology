import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import { Title } from 'components/title';

import { galleryImages } from 'modules/gallery/core';

interface Props {
  className?: string;
}

export const Gallery: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <Container>
      <Title>Галерея</Title>
      <Row className="g-3">
        {galleryImages.map(({ thumbnail }) => (
          <Col sm="6" lg="4">
            <Image layout="responsive" src={thumbnail} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
