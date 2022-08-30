import { Col, Layout, Menu, Row, Typography } from 'antd';
import React from 'react';
import Link from 'next/link';

import { Routes } from 'lib/routes';

import headerStyles from './style.module.scss';

import type { PropsWithChildren } from 'react';

const { Header, Footer, Content } = Layout;
const { Text } = Typography;

const links = [
  { label: <Link href={Routes.Main}>Главная</Link>, key: 'main-page' },
  { label: <Link href={Routes.Services}>Услуги</Link>, key: 'services-page' },
  { label: <Link href={Routes.Articles}>Статьи</Link>, key: 'articles-page' },
  { label: <Link href={Routes.Contacts}>Контакты</Link>, key: 'contacts-page' },
];

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header className={headerStyles.header}>
      <Row wrap>
        <Col flex={1} sm={{ span: 8 }}>
          <Text className={headerStyles.logo}>AliCosmetology</Text>
        </Col>
        <Col flex={1} sm={{ span: 16 }}>
          <Menu theme="dark" mode="horizontal" items={links} />
        </Col>
      </Row>
    </Header>
    <Content>{children}</Content>
    <Footer>lorem 2</Footer>
  </Layout>
);
