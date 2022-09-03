import { Col, Container, Row } from 'react-bootstrap';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { Routes } from 'lib/routes';

import instagram from 'public/icons/instagram.svg';
import headerStyles from 'modules/layout/style.module.scss';

const links = [
  {
    link: Routes.Services,
    title: 'Услуги',
  },
  {
    link: Routes.Articles,
    title: 'Статьи',
  },
  {
    link: Routes.Contacts,
    title: 'Задать вопрос',
  },
  {
    link: Routes.Contacts,
    title: 'Записаться на прием',
  },
];

export const Footer: React.FC = () => (
  <footer className="bg-dark py-4">
    <Container>
      <Row>
        <Col md="4">
          <span className={cn(headerStyles.logo, 'fs-10')}>AliCosmetology</span>
        </Col>
        <Col md="4">
          {links.map(({ link, title }, index) => (
            <p key={index} className="text-white">
              <Link href={link}>
                <a className="text-decoration-none text-white">{title}</a>
              </Link>
            </p>
          ))}
        </Col>
        <Col md="4">
          <p className="h5 mb-3 text-white">Контакты:</p>
          <p className="text-white">Адрес: г.Минск, ул.Мележа 1, (БЦ "Парус") каб. 412</p>
          <p className="mb-2.5">
            <Link href="tel:+375298657755">
              <a className="text-decoration-none text-white">+375(29)865-77-55</a>
            </Link>
          </p>
          <p className="mb-0">
            <Link href="/">
              <a className="text-decoration-none d-inline-block text-white">
                <Image src={instagram} width={32} height={32} />
              </a>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);
