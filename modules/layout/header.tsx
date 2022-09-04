import { Button, Container, Nav } from 'react-bootstrap';
import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import { Routes } from 'lib/routes';

import headerStyles from 'modules/layout/style.module.scss';
import animation from 'styles/animation.module.scss';

const links = [
  { route: Routes.Main, key: 'main-page', title: 'Главная' },
  { route: Routes.Services, key: 'services-page', title: 'Услуги' },
  { route: Routes.Articles, key: 'articles-page', title: 'Статьи' },
  { route: Routes.Contacts, key: 'contacts-page', title: 'Контакты' },
];

export const Header: React.FC = () => (
  <header className="text-bg-dark fixed-top w-100 bg-dark py-2">
    <Container className="d-flex align-items-center justify-content-center flex-wrap">
      <span className={cn(headerStyles.logo, 'fs-10 me-md-auto')}>AliCosmetology</span>
      <Nav className={cn('mx-3', headerStyles.fullWidth)}>
        {links.map(({ title, key, route }) => (
          <Nav.Item key={key}>
            <Link passHref href={route}>
              <Nav.Link className={cn('text-white', headerStyles.navLink)}>{title}</Nav.Link>
            </Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className={headerStyles.fullWidth}>
        <Button className={animation.pulse}>Записаться на прием</Button>
      </div>
    </Container>
  </header>
);
