import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React, { useRef } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import Link from 'next/link';

import { Title } from 'components/title';

import { Routes } from 'lib/routes';

import styles from './style.module.scss';

import type { Map as YaMapType } from 'yandex-maps';

interface Props {
  className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
  const mapRef = useRef<YaMapType | null>(null);

  return (
    <section className={className}>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href={Routes.Main}>Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Контакты</Breadcrumb.Item>
        </Breadcrumb>
        <Title tag="h1">Контакты</Title>
        <p className="fs-5">
          <b>Адрес:</b> г.Минск, ул.Мележа 1, (БЦ "Парус") каб. 412
        </p>
        <p className="mb-2.5 fs-5">
          <Link href="tel:+375298657755">
            <a className="text-decoration-none">+375(29)865-77-55</a>
          </Link>
        </p>
      </Container>
      <div className={styles.map}>
        <YMaps>
          <Map
            instanceRef={(map: YaMapType) => {
              mapRef.current = map;
            }}
            defaultState={{ center: [53.939_534, 27.601_348], zoom: 17 }}
          >
            <Placemark defaultGeometry={[53.939_534, 27.601_348]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
};
