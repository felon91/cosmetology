import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Title } from 'components/title';

import { GalleryItem } from 'modules/gallery/item';
import { galleryImages } from 'modules/gallery/core';

interface Props {
  className?: string;
}

export const Gallery: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <Container>
      <Title>Галерея</Title>
      <Row className="g-3">
        {galleryImages.map(({ thumbnail, original, alt }, index) => (
          <GalleryItem
            key={index}
            thumbnail={thumbnail}
            original={original}
            quality={90}
            alt={alt}
          />
        ))}
      </Row>
    </Container>
  </section>
);
