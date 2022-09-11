import { Breadcrumb, Container } from 'react-bootstrap';
import React from 'react';

import { Routes } from 'lib/routes';

import { MainLayout } from 'modules/layout';

import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => (
  <MainLayout>
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item href={Routes.Main}>Главная</Breadcrumb.Item>
        <Breadcrumb.Item active>Страница не найдена</Breadcrumb.Item>
      </Breadcrumb>
      <div className="fs-1 py-5 my-5 text-center">Страница не найдена</div>
    </Container>
  </MainLayout>
);

export default NotFoundPage;
