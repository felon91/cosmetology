import { Col, Container, Pagination, Row } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { Title } from 'components/title';

import { articles } from 'modules/articles/core';

import styles from './style.module.scss';

interface Props {
  className?: string;
  withPagination?: boolean;
}

export const Articles: React.FC<Props> = ({ className, withPagination }) => (
  <section className={className}>
    <Container>
      <Title>Статьи</Title>
      <Row className="g-3 mb-4">
        {articles.map(({ img, title, description, link }, index) => (
          <Col key={index} sm="6" lg="3">
            <div className={cn('position-relative border shadow', styles.article)}>
              <div className={cn('overflow-hidden mb-2', styles.img)}>
                <Image layout="responsive" src={img} />
              </div>
              <h3 className="h4 px-3">{title}</h3>
              <p className="px-3">{description}</p>
              <Link href={link}>
                <a aria-label="Читать далее" className="position-absolute w-100 h-100 top-0 left-0">
                  <span />
                </a>
              </Link>
              <span className="d-block text-primary px-3 mb-3">Читать далее</span>
            </div>
          </Col>
        ))}
      </Row>
      {withPagination && (
        <Pagination className="justify-content-center mt-5">
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      )}
    </Container>
  </section>
);
