import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { Title } from 'components/title';

import { articles } from 'modules/articles/core';

interface Props {
  className?: string;
}

export const Articles: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <Container>
      <Title>Статьи</Title>
      <Row className="g-3 mb-4">
        {articles.map(({ img, title, description, link }) => (
          <Col sm="6" lg="3">
            <Image className="mb-2" layout="responsive" src={img} />
            <h3 className="h4">{title}</h3>
            <p>{description}</p>
            <Link href={link}>
              <a>Читать далее</a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
