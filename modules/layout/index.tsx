import React from 'react';
import Link from 'next/link';
import { Container, Nav } from 'react-bootstrap';
import cn from 'classnames';

import { Routes } from 'lib/routes';

import headerStyles from './style.module.scss';

import type { PropsWithChildren } from 'react';

const links = [
  { route: Routes.Main, key: 'main-page', title: 'Главная' },
  { route: Routes.Services, key: 'services-page', title: 'Услуги' },
  { route: Routes.Articles, key: 'articles-page', title: 'Статьи' },
  { route: Routes.Contacts, key: 'contacts-page', title: 'Контакты' },
];

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <header className="text-bg-dark fixed-top w-100 bg-dark py-2">
      <Container className="d-flex align-items-center justify-content-center flex-wrap">
        <span className={cn(headerStyles.logo, 'fs-10 me-md-auto')}>AliCosmetology</span>
        <Nav variant="pills" defaultActiveKey={Routes.Main}>
          {links.map(({ title, key, route }) => (
            <Nav.Item key={key}>
              <Link passHref href={route}>
                <Nav.Link>{title}</Nav.Link>
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </header>
    <main>{children}</main>
    <footer>lorem 2</footer>
  </>
);
